// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, Group, Emoji, Activity, GroupProfile } = initSchema(schema);

export {
  Profile,
  Group,
  Emoji,
  Activity,
  GroupProfile
};