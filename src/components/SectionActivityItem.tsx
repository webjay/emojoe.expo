import React, { useMemo, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { Chip, ActivityIndicator } from 'react-native-paper';
import type { ActivityItem } from '../types/common';
import { dayProgressFlex } from '../lib/date';
import { profileGetById } from '../lib/api';
import type { Profile } from '../types/api';
import Emoji from './Emoji';

type Props = {
  item: ActivityItem
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipView: {
    flexBasis: '30%',
    flexDirection: 'row',
  },
  chipSpace: {
    flexGrow: 1,
  },
});

function firstName(name: Profile['name']) {
  if (!name) return '🃟';
  return name.substring(0, name.indexOf(' '));
}

export default function SectionActivityItem({ item: { createdAt, emoji, profileId } }: Props) {
  const [profile, setProfile] = useState<Profile>();
  const avatar = useMemo(() => (profile ? null : <ActivityIndicator />), [profile]);
  const progressSpaceStyle = useMemo<StyleProp<ViewStyle>>(() => ({
    flex: dayProgressFlex(createdAt),
  }), [createdAt]);
  useEffect(() => {
    profileGetById(profileId).then(setProfile);
  }, [profileId]);
  return (
    <View style={styles.container}>
      <View style={styles.chipView}>
        <Chip avatar={avatar} mode="outlined" compact>
          {firstName(profile?.name)}
        </Chip>
        <View style={styles.chipSpace} />
      </View>
      <View style={progressSpaceStyle} />
      <Emoji emoji={emoji} />
    </View>
  );
}
