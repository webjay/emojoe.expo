import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, SectionList } from 'react-native';
import type { ScreenPropsStack } from '../types/navigation';
import useGroup from '../hooks/useGroup';
import type { Activity } from '../types/api';
import { groupGetActivities } from '../lib/api';
import renderItem from '../components/section-activity';

type Props = ScreenPropsStack<'GroupActivity'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function GroupActivityScreen({ route: { params: { groupId } } }: Props) {
  const { setOptions } = useNavigation();
  const { group } = useGroup(groupId);
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    groupGetActivities(groupId).then(setActivities);
  }, [groupId]);
  useEffect(() => {
    if (!group) return;
    setOptions({ title: group.name });
  }, [group, setOptions]);
  const sections = [
    {
      title: '',
      data: activities,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
