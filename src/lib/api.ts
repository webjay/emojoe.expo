import { API, graphqlOperation } from 'aws-amplify';
import type { GraphQLResult } from '@aws-amplify/api-graphql';
import getCognitoUserSub from './cognito';
import {
  createProfile,
  updateProfile,
  createGroup,
  updateGroup,
  createGroupMembership,
  updateGroupMembership,
  deleteGroupMembership,
  createActivity,
} from '../graphql/mutations';
import {
  profilesBySubId,
  getGroup,
  groupMembershipsByProfileId,
  groupMembershipsByGroupIdAndProfileId,
} from '../graphql/queries';
import {
  Profile,
  Group,
  GroupMembership,
  CreateProfileInput,
  UpdateProfileInput,
  CreateGroupInput,
  UpdateGroupInput,
  CreateGroupMembershipInput,
  UpdateGroupMembershipInput,
} from '../types/api';

async function dataExtract<T>(result: Promise<GraphQLResult<T>> | unknown) {
  if (result instanceof Promise) {
    const { data, errors } = await result;
    // eslint-disable-next-line no-console
    if (errors) console.warn(errors);
    const queryResult = data[Object.keys(data)[0]];
    return Object.hasOwn(queryResult, 'items') ? queryResult.items : queryResult;
  }
  return result;
}

export async function profileCreate(input?: Partial<CreateProfileInput>) {
  const subId = await getCognitoUserSub();
  return API.graphql(graphqlOperation(createProfile, { input: { ...input, subId } }));
}

export async function profileGet(): Promise<Profile> {
  const subId = await getCognitoUserSub();
  const [profile] = await dataExtract(API.graphql(graphqlOperation(profilesBySubId, { subId })));
  if (!profile) {
    // TODO: dont
    await profileCreate();
    return profileGet();
  }
  return profile;
}

export async function profileUpdate(update: Partial<UpdateProfileInput>) {
  const { id } = await profileGet();
  return API.graphql(graphqlOperation(updateProfile, { input: { ...update, id } }));
}

export function groupGet(id: Group['id']): Promise<Group> {
  return dataExtract(API.graphql(graphqlOperation(getGroup, { id })));
}

export async function groupsByProfile(): Promise<GroupMembership[]> {
  const { id: profileId } = await profileGet();
  return dataExtract(API.graphql(graphqlOperation(groupMembershipsByProfileId, { profileId })));
}

async function groupMembershipByGroupId(groupId: Group['id']): Promise<GroupMembership[]> {
  const { id: profileId } = await profileGet();
  const variables = {
    groupId,
    profileId: { eq: profileId },
  };
  return dataExtract(API.graphql(graphqlOperation(groupMembershipsByGroupIdAndProfileId, variables)));
}

export function groupUpdate(id: UpdateGroupInput['id'], update: Partial<UpdateGroupInput>): Promise<Group> {
  return dataExtract(API.graphql(graphqlOperation(updateGroup, { input: { ...update, id } })));
}

export async function groupCreateMembership(groupId: CreateGroupMembershipInput['groupId']) {
  const { id: profileId } = await profileGet();
  return API.graphql(graphqlOperation(createGroupMembership, { input: { profileId, groupId } }));
}

export async function groupCreate(input: CreateGroupInput): Promise<Group> {
  const group = await dataExtract(API.graphql(graphqlOperation(createGroup, { input })));
  await groupCreateMembership(group.id);
  return group;
}

export async function groupUpdateMembership(groupId: Group['id'], update: Partial<UpdateGroupMembershipInput>) {
  const [{ id }] = await groupMembershipByGroupId(groupId);
  return API.graphql(graphqlOperation(updateGroupMembership, { input: { ...update, id } }));
}

export async function groupDeleteMembership(groupId: Group['id']) {
  const [{ id }] = await groupMembershipByGroupId(groupId);
  return API.graphql(graphqlOperation(deleteGroupMembership, { input: { id } }));
}

export async function activityCreate(groupId: Group['id']) {
  const [{ id: groupMembershipActivitiesId }] = await groupMembershipByGroupId(groupId);
  return API.graphql(graphqlOperation(createActivity, { input: { groupMembershipActivitiesId } }));
}
