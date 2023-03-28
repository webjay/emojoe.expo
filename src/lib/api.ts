import { API, graphqlOperation } from '@aws-amplify/api';
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
  createRecognition,
} from '../graphql/mutations';
import {
  getProfile,
  profilesBySubId,
  getGroup,
  groupMembershipsByProfileId,
  groupMembershipsByGroupIdAndProfileId,
  activitiesByGroupIdAndCreatedAt,
  getActivity,
} from '../graphql/queries';
import type {
  Activity,
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
import Sentry from './sentry';

function filterNullItems(item: Record<string, unknown>) {
  return item !== null;
}

function catchWrap<T>(result: Promise<GraphQLResult<T>> | T) {
  if (result instanceof Promise) {
    return result.catch(Sentry.captureException);
  }
  return result;
}

async function dataExtract<T>(result: Promise<GraphQLResult<T>> | unknown) {
  if (result instanceof Promise) {
    const { data, errors } = await result.catch((catchedResult) => catchedResult);
    if (errors) {
      Sentry.captureException(errors);
    }
    const queryResult = data[Object.keys(data)[0]];
    return Object.hasOwn(queryResult, 'items') ? queryResult.items.filter(filterNullItems) : queryResult;
  }
  return result;
}

export async function profileCreate(input?: Partial<CreateProfileInput>) {
  const subId = await getCognitoUserSub();
  return API.graphql(graphqlOperation(createProfile, { input: { ...input, subId } }));
}

export function profileGetById(id: Profile['id']): Promise<Profile> {
  return dataExtract(API.graphql(graphqlOperation(getProfile, { id })));
}

export async function profileGetBySubId(): Promise<Profile> {
  const subId = await getCognitoUserSub();
  const [profile] = await dataExtract(API.graphql(graphqlOperation(profilesBySubId, { subId })));
  if (!profile) {
    // TODO: dont
    await profileCreate();
    return profileGetBySubId();
  }
  return profile;
}

export async function profileUpdate(update: Partial<UpdateProfileInput>) {
  const { id } = await profileGetBySubId();
  return API.graphql(graphqlOperation(updateProfile, { input: { ...update, id } }));
}

export function groupGet(id: Group['id']): Promise<Group> {
  return dataExtract(API.graphql(graphqlOperation(getGroup, { id })));
}

export async function groupsByProfile(): Promise<GroupMembership[]> {
  const { id: profileId } = await profileGetBySubId();
  return dataExtract(API.graphql(graphqlOperation(groupMembershipsByProfileId, { profileId })));
}

async function groupMembershipByGroupId(groupId: Group['id']): Promise<GroupMembership[]> {
  const { id: profileId } = await profileGetBySubId();
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
  const existing = await groupMembershipByGroupId(groupId);
  if (existing.length !== 0) return;
  const { id: profileId } = await profileGetBySubId();
  await API.graphql(graphqlOperation(createGroupMembership, { input: { profileId, groupId } }));
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

export function groupGetActivities(groupId: Group['id']) {
  const sortDirection = 'DESC';
  return dataExtract(API.graphql(graphqlOperation(activitiesByGroupIdAndCreatedAt, { groupId, sortDirection })));
}

export async function activityCreate(groupId: Group['id'], emoji: GroupMembership['emoji']) {
  const [{ id: groupMembershipActivitiesId }] = await groupMembershipByGroupId(groupId);
  return API.graphql(graphqlOperation(createActivity, { input: { groupId, groupMembershipActivitiesId, emoji } }));
}

export function activityGet(id: Activity['id']) {
  return dataExtract(API.graphql(graphqlOperation(getActivity, { id })));
}

export function recognitionCreate(activityId: Activity['id'], emoji: Activity['emoji']) {
  return catchWrap(API.graphql(graphqlOperation(createRecognition, { input: { activityId, emoji } })));
}
