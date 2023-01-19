// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, GroupMembership, Group, Activity } = initSchema(schema);

export {
  Profile,
  GroupMembership,
  Group,
  Activity
};