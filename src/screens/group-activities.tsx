import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation, useSearchParams } from 'expo-router';
import { StyleSheet, SectionList, View } from 'react-native';
import type { SectionListRenderItem } from 'react-native';
import Container from '@src/components/Container';
import useGroup from '../hooks/useGroup';
import type { Activity } from '../types/api';
import { groupGetActivities } from '../lib/api';
import SectionActivityHeader from '../components/SectionActivityHeader';
import SectionActivityItem from '../components/SectionActivityItem';
import Empty from '../components/Empty';
import SafeAreaBottom from '../components/SafeAreaBottom';
import type {
  ActivitySection,
  ActivitySectionMap,
  ActivityItem,
} from '../types/common';
import { toDateString, dayTitle } from '../lib/date';

type SearchParams = {
  groupId: string;
};

type SectionsMap = Map<string, ActivitySectionMap>;

const styles = StyleSheet.create({
  sectionFooter: {
    height: 20,
  },
});

function sectionsMapToArray(map: SectionsMap) {
  return Array.from(map, ([, item]) => ({
    title: item.title,
    data: Array.from(item.data, ([, v]) => v),
  }));
}

function makeSections(activities: Activity[]) {
  const sections: SectionsMap = new Map();
  activities.forEach(
    ({ id, createdAt, emoji, groupMembership: { profileId } }) => {
      const createdAtDateString = toDateString(createdAt);
      if (!sections.has(createdAtDateString)) {
        sections.set(createdAtDateString, {
          title: dayTitle(new Date(createdAt)),
          data: new Map(),
        });
      }
      const section = sections.get(createdAtDateString);
      if (!section?.data.has(profileId)) {
        section?.data.set(profileId, []);
      }
      const sectionForProfile = section?.data.get(profileId);
      sectionForProfile?.push({
        id,
        createdAt,
        emoji,
        profileId,
      });
    },
  );
  return sections;
}

const renderSectionHeader = ({ section }: { section: ActivitySection }) => (
  <SectionActivityHeader section={section} />
);

const renderSectionFooter = () => <View style={styles.sectionFooter} />;

const renderItem: SectionListRenderItem<ActivityItem[]> = ({ item }) => (
  <SectionActivityItem item={item} />
);

export default function GroupActivitiesScreen() {
  const { groupId } = useSearchParams<SearchParams>();
  const { setOptions } = useNavigation();
  const { group } = useGroup(groupId);
  const [sections, setSections] = useState<ActivitySection[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const loadData = useCallback(async () => {
    if (!groupId) return;
    setRefreshing(true);
    await groupGetActivities(groupId)
      .then(makeSections)
      .then(sectionsMapToArray)
      .then(setSections);
    setRefreshing(false);
  }, [groupId]);
  useEffect(() => {
    loadData();
  }, [loadData]);
  useEffect(() => {
    if (!group) return;
    setOptions({ title: group.name });
  }, [group, setOptions]);
  return (
    <Container>
      <SectionList
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        renderItem={renderItem}
        onRefresh={loadData}
        refreshing={refreshing}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={refreshing ? null : Empty}
        ListFooterComponent={SafeAreaBottom}
      />
    </Container>
  );
}
