import type { Activity } from './api';

export type ActivityItem = {
  id: Activity['id'],
  createdAt: Activity['createdAt'],
  emoji: Activity['emoji'],
  profileId: Activity['groupMembership']['profileId'],
};

export type ActivitySection = {
  title?: Readonly<string>,
  data: Readonly<ActivityItem[]>,
};

export interface ActivitySectionMap {
  title?: string,
  data: ActivityItem[],
}
