import React, { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Text, Chip, Button } from 'react-native-paper';
import type { ScreenPropsStack } from '../../types/navigation';
import { groupCreateMembership, groupUpdateMembership } from '../../lib/api';

type Props = ScreenPropsStack<'OnboardGroup'>;
type Groups = {
  [key: string]: {
    emoji: string;
    name: string;
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  segment: {
    flex: 1,
    justifyContent: 'center',
  },
  groups: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    paddingLeft: 3,
  },
  emoji: {
    paddingTop: 3,
    paddingLeft: 2,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
});

const groups: Groups = {
  '613ec295-d346-4987-9dac-6c2dcbaea041': {
    emoji: '🧘',
    name: 'Meditation',
  },
  '22af81b1-07ad-46f5-ba73-da4c4502f8fe': {
    emoji: '🏋️',
    name: 'Exercise',
  },
  '5ee934fa-9555-447a-bbdf-9b585c9ef714': {
    emoji: '📚',
    name: 'Study',
  },
  'df1d0023-1814-434e-8ab1-f4fd5a526392': {
    emoji: '🚰',
    name: 'Hydration',
  },
  '8463e3bd-a7cc-4979-a2a4-adcbfcb6cb4e': {
    emoji: '🚶',
    name: 'Walk',
  },
};

const navNext = 'OnboardNotifications';

export default function OnboardGroupScreen({
  navigation: { navigate },
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const handleSelect = useCallback((groupId: string) => {
    setSelected((previousState) => {
      if (previousState.includes(groupId)) {
        return previousState.filter(
          (selectedGroupId) => selectedGroupId !== groupId,
        );
      }
      return [...previousState, groupId];
    });
  }, []);
  const handlePressSkip = useCallback(() => navigate(navNext), [navigate]);
  const handlePressDone = useCallback(async () => {
    setLoading(true);
    await Promise.all(
      selected.map((selectedGroupId) => groupCreateMembership(selectedGroupId)),
    );
    await Promise.all(
      selected.map((selectedGroupId) =>
        groupUpdateMembership(selectedGroupId, {
          emoji: groups[selectedGroupId].emoji,
        }),
      ),
    );
    setLoading(false);
    navigate(navNext);
  }, [selected, navigate]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.segment}>
        <Text variant="titleMedium">Which groups would you like to join?</Text>
      </View>
      <View style={styles.segment}>
        <View style={styles.groups}>
          {Object.entries(groups).map(([groupId, { name, emoji }]) => (
            <Chip
              key={groupId}
              avatar={<Text style={styles.emoji}>{emoji}</Text>}
              selected={selected.includes(groupId)}
              showSelectedOverlay
              compact
              onPress={() => handleSelect(groupId)}
              style={styles.chip}
            >
              {name}
            </Chip>
          ))}
        </View>
      </View>
      <View style={styles.segment}>
        <View style={styles.buttons}>
          <Button mode="outlined" onPress={handlePressSkip}>
            Skip
          </Button>
          <Button
            mode="contained"
            disabled={selected.length === 0}
            loading={loading}
            onPress={handlePressDone}
          >
            Done
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
