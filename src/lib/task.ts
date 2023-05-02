import { InteractionManager } from 'react-native';
import type { Activity } from '@src/types/api';
import {
  activityCreate,
  recognitionCreate,
  groupCreateMembership,
  groupGet,
  groupUpdate,
} from '@src/lib/api';

export const { runAfterInteractions } = InteractionManager;

export const handleCreateActivity = (
  groupId: Activity['groupId'],
  emoji: Activity['emoji'],
) => runAfterInteractions(() => activityCreate(groupId, emoji));

export const handleCreateRecognition = (
  activityId: Activity['id'],
  emoji: Activity['emoji'],
) => runAfterInteractions(() => recognitionCreate(activityId, emoji));

export const handleGroupCreateMembership = (groupId: Activity['groupId']) =>
  runAfterInteractions(() => groupCreateMembership(groupId));

export const handleGroupSetEmoji = (
  groupId: Activity['groupId'],
  emoji: Activity['emoji'],
) =>
  runAfterInteractions(async () => {
    const { emoji: groupEmoji } = await groupGet(groupId);
    if (!groupEmoji) {
      groupUpdate(groupId, { emoji });
    }
  });
