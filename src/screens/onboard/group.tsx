import React, { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Text, Chip, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { groupCreateMembership, groupUpdateMembership } from '@src/lib/api';
import groups from '@src/lib/groups';

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
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
});

const navNext = '/onboard/notifications';

export default function OnboardGroupScreen() {
  const { push: navigate } = useRouter();
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
