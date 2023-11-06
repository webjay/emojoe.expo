import type { Activity, GroupMembership } from './api';

export type ActivityItem = {
  id: Activity['id'];
  createdAt: Activity['createdAt'];
  emoji: Activity['emoji'];
  profileId: GroupMembership['profileId'];
};

export type ActivitySection = {
  title?: Readonly<string>;
  data: Readonly<ActivityItem[][]>;
};

export interface ActivitySectionMap {
  title?: string;
  data: Map<string, ActivityItem[]>;
}
