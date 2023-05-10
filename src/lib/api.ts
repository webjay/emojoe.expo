import { API, graphqlOperation } from '@aws-amplify/api';
import type { GraphQLResult } from '@aws-amplify/api-graphql';
import awsConfig from '@src/aws-exports';
import getCognitoUserSub from '@src/lib/cognito';
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
} from '@src/graphql/mutations';
import {
  getProfile,
  profilesBySubId,
  getGroup,
  activitiesByGroupMembershipActivitiesIdAndCreatedAt,
  recognitionsByActivityIdAndCreatedAt,
  groupMembershipsByProfileId,
  groupMembershipsByGroupIdAndProfileId,
  activitiesByGroupIdAndCreatedAt,
  getActivity,
} from '@src/graphql/queries';
import type {
  Activity,
  Recognition,
  Profile,
  Group,
  GroupMembership,
  CreateProfileInput,
  UpdateProfileInput,
  CreateGroupInput,
  UpdateGroupInput,
  CreateGroupMembershipInput,
  UpdateGroupMembershipInput,
} from '@src/types/api';
import Sentry from '@src/lib/sentry';

const authToken = awsConfig.aws_appsync_apiKey;

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
    const { data, errors } = await result.catch((catchedResult) => {
      Sentry.captureException(catchedResult);
      return catchedResult;
    });
    if (errors) {
      Sentry.captureException(errors);
    }
    if (!data) return null;
    const queryResult = data[Object.keys(data)[0]];
    if (!queryResult) return null;
    return Object.hasOwn(queryResult, 'items')
      ? queryResult.items.filter(filterNullItems)
      : queryResult;
  }
  return result;
}

export async function profileCreate(input?: Partial<CreateProfileInput>) {
  const subId = await getCognitoUserSub();
  return API.graphql(
    graphqlOperation(createProfile, { input: { ...input, subId } }),
  );
}

export function profileGetById(id: Profile['id']): Promise<Profile> {
  return dataExtract(API.graphql(graphqlOperation(getProfile, { id })));
}

export async function profileGetBySubId(): Promise<Profile> {
  const subId = await getCognitoUserSub();
  const [profile] = await dataExtract(
    API.graphql(graphqlOperation(profilesBySubId, { subId })),
  );
  if (!profile) {
    // TODO: dont
    await profileCreate();
    return profileGetBySubId();
  }
  return profile;
}

export async function profileUpdate(update: Partial<UpdateProfileInput>) {
  const { id } = await profileGetBySubId();
  return API.graphql(
    graphqlOperation(updateProfile, { input: { ...update, id } }),
  );
}

export function groupGet(id: Group['id']): Promise<Group> {
  return dataExtract(API.graphql(graphqlOperation(getGroup, { id })));
}

export function groupGetPublic(id: Group['id']) {
  return dataExtract(
    API.graphql({
      query: getGroup,
      variables: { id },
      authMode: 'API_KEY',
      authToken,
    }),
  );
}

export async function getActivitiesByGroupMembershipId(
  groupMembershipActivitiesId: GroupMembership['id'],
): Promise<Activity[]> {
  const sortDirection = 'DESC';
  return dataExtract(
    API.graphql(
      graphqlOperation(activitiesByGroupMembershipActivitiesIdAndCreatedAt, {
        groupMembershipActivitiesId,
        sortDirection,
      }),
    ),
  );
}

export async function getRecognitionByActivityId(
  activityId: Activity['id'],
): Promise<Recognition[]> {
  return dataExtract(
    API.graphql(
      graphqlOperation(recognitionsByActivityIdAndCreatedAt, {
        activityId,
      }),
    ),
  );
}

export async function groupsByProfile(): Promise<GroupMembership[]> {
  const { id: profileId } = await profileGetBySubId();
  return dataExtract(
    API.graphql(graphqlOperation(groupMembershipsByProfileId, { profileId })),
  );
}

export async function groupMembershipByProfileAndGroupId(
  groupId: Group['id'],
): Promise<GroupMembership[]> {
  const { id: profileId } = await profileGetBySubId();
  const variables = {
    groupId,
    profileId: { eq: profileId },
  };
  return dataExtract(
    API.graphql(
      graphqlOperation(groupMembershipsByGroupIdAndProfileId, variables),
    ),
  );
}

export function groupUpdate(
  id: UpdateGroupInput['id'],
  update: Partial<UpdateGroupInput>,
): Promise<Group> {
  return dataExtract(
    API.graphql(graphqlOperation(updateGroup, { input: { ...update, id } })),
  );
}

export async function groupCreateMembership(
  groupId: CreateGroupMembershipInput['groupId'],
) {
  const existing = await groupMembershipByProfileAndGroupId(groupId);
  if (existing.length !== 0) return;
  const { id: profileId } = await profileGetBySubId();
  await API.graphql(
    graphqlOperation(createGroupMembership, { input: { profileId, groupId } }),
  );
}

export async function groupCreate(input: CreateGroupInput): Promise<Group> {
  const group = await dataExtract(
    API.graphql(graphqlOperation(createGroup, { input })),
  );
  await groupCreateMembership(group.id);
  return group;
}

export async function groupUpdateMembership(
  groupId: Group['id'],
  update: Partial<UpdateGroupMembershipInput>,
) {
  const [{ id }] = await groupMembershipByProfileAndGroupId(groupId);
  return API.graphql(
    graphqlOperation(updateGroupMembership, { input: { ...update, id } }),
  );
}

export async function groupDeleteMembership(groupId: Group['id']) {
  const [{ id }] = await groupMembershipByProfileAndGroupId(groupId);
  return API.graphql(
    graphqlOperation(deleteGroupMembership, { input: { id } }),
  );
}

export function groupGetActivities(groupId: Group['id']) {
  const sortDirection = 'DESC';
  return dataExtract(
    API.graphql(
      graphqlOperation(activitiesByGroupIdAndCreatedAt, {
        groupId,
        sortDirection,
      }),
    ),
  );
}

export async function activityCreate(
  groupId: Group['id'],
  emoji: GroupMembership['emoji'],
) {
  const [{ id: groupMembershipActivitiesId }] =
    await groupMembershipByProfileAndGroupId(groupId);
  return catchWrap(
    API.graphql(
      graphqlOperation(createActivity, {
        input: { groupId, groupMembershipActivitiesId, emoji },
      }),
    ),
  );
}

export function activityGet(id: Activity['id']) {
  return dataExtract(API.graphql(graphqlOperation(getActivity, { id })));
}

export function recognitionCreate(
  activityId: Activity['id'],
  emoji: Activity['emoji'],
) {
  return catchWrap(
    API.graphql(
      graphqlOperation(createRecognition, { input: { activityId, emoji } }),
    ),
  );
}
