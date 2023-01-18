// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, Emoji, Group, GroupMember, Activity } = initSchema(schema);

export {
  Profile,
  Emoji,
  Group,
  GroupMember,
  Activity
};