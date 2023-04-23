import { InteractionManager } from 'react-native';
import type { Activity } from '@src/types/api';
import { activityCreate, recognitionCreate } from '@src/lib/api';

export const { runAfterInteractions } = InteractionManager;

export const handleCreateActivity = (groupId: Activity['groupId'], emoji: Activity['emoji']) =>
  runAfterInteractions(() => activityCreate(groupId, emoji));

export const handleCreateRecognition = (activityId: Activity['id'], emoji: Activity['emoji']) =>
  runAfterInteractions(recognitionCreate(activityId, emoji));
