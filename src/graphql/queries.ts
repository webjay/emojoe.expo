/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/api";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    subId
    owner
    name
    pushToken
    groupMemberships {
      items {
        id
        owner
        profileId
        groupId
        emoji
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
        __typename
      }
      nextToken
      __typename
    }
    timeZone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      subId
      owner
      name
      pushToken
      groupMemberships {
        nextToken
        __typename
      }
      timeZone
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const profilesBySubId = /* GraphQL */ `query ProfilesBySubId(
  $subId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  profilesBySubId(
    subId: $subId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      subId
      owner
      name
      pushToken
      groupMemberships {
        nextToken
        __typename
      }
      timeZone
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProfilesBySubIdQueryVariables,
  APITypes.ProfilesBySubIdQuery
>;
export const getGroup = /* GraphQL */ `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    name
    emoji
    memberships {
      items {
        id
        owner
        profileId
        groupId
        emoji
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      emoji
      memberships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const getGroupMembership = /* GraphQL */ `query GetGroupMembership($id: ID!) {
  getGroupMembership(id: $id) {
    id
    owner
    profileId
    groupId
    group {
      id
      name
      emoji
      memberships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    profile {
      id
      subId
      owner
      name
      pushToken
      groupMemberships {
        nextToken
        __typename
      }
      timeZone
      createdAt
      updatedAt
      __typename
    }
    emoji
    activities {
      items {
        id
        owner
        groupId
        emoji
        groupMembershipActivitiesId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    profileGroupMembershipsId
    groupMembershipsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGroupMembershipQueryVariables,
  APITypes.GetGroupMembershipQuery
>;
export const listGroupMemberships = /* GraphQL */ `query ListGroupMemberships(
  $filter: ModelGroupMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      profileId
      groupId
      group {
        id
        name
        emoji
        createdAt
        updatedAt
        __typename
      }
      profile {
        id
        subId
        owner
        name
        pushToken
        timeZone
        createdAt
        updatedAt
        __typename
      }
      emoji
      activities {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      profileGroupMembershipsId
      groupMembershipsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupMembershipsQueryVariables,
  APITypes.ListGroupMembershipsQuery
>;
export const groupMembershipsByProfileId = /* GraphQL */ `query GroupMembershipsByProfileId(
  $profileId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGroupMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  groupMembershipsByProfileId(
    profileId: $profileId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      profileId
      groupId
      group {
        id
        name
        emoji
        createdAt
        updatedAt
        __typename
      }
      profile {
        id
        subId
        owner
        name
        pushToken
        timeZone
        createdAt
        updatedAt
        __typename
      }
      emoji
      activities {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      profileGroupMembershipsId
      groupMembershipsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupMembershipsByProfileIdQueryVariables,
  APITypes.GroupMembershipsByProfileIdQuery
>;
export const groupMembershipsByGroupIdAndProfileId = /* GraphQL */ `query GroupMembershipsByGroupIdAndProfileId(
  $groupId: ID!
  $profileId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  groupMembershipsByGroupIdAndProfileId(
    groupId: $groupId
    profileId: $profileId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      profileId
      groupId
      group {
        id
        name
        emoji
        createdAt
        updatedAt
        __typename
      }
      profile {
        id
        subId
        owner
        name
        pushToken
        timeZone
        createdAt
        updatedAt
        __typename
      }
      emoji
      activities {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      profileGroupMembershipsId
      groupMembershipsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupMembershipsByGroupIdAndProfileIdQueryVariables,
  APITypes.GroupMembershipsByGroupIdAndProfileIdQuery
>;
export const getActivity = /* GraphQL */ `query GetActivity($id: ID!) {
  getActivity(id: $id) {
    id
    owner
    groupId
    emoji
    groupMembership {
      id
      owner
      profileId
      groupId
      group {
        id
        name
        emoji
        createdAt
        updatedAt
        __typename
      }
      profile {
        id
        subId
        owner
        name
        pushToken
        timeZone
        createdAt
        updatedAt
        __typename
      }
      emoji
      activities {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      profileGroupMembershipsId
      groupMembershipsId
      __typename
    }
    groupMembershipActivitiesId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActivityQueryVariables,
  APITypes.GetActivityQuery
>;
export const listActivities = /* GraphQL */ `query ListActivities(
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      groupId
      emoji
      groupMembership {
        id
        owner
        profileId
        groupId
        emoji
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
        __typename
      }
      groupMembershipActivitiesId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActivitiesQueryVariables,
  APITypes.ListActivitiesQuery
>;
export const activitiesByGroupIdAndCreatedAt = /* GraphQL */ `query ActivitiesByGroupIdAndCreatedAt(
  $groupId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  activitiesByGroupIdAndCreatedAt(
    groupId: $groupId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      groupId
      emoji
      groupMembership {
        id
        owner
        profileId
        groupId
        emoji
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
        __typename
      }
      groupMembershipActivitiesId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ActivitiesByGroupIdAndCreatedAtQueryVariables,
  APITypes.ActivitiesByGroupIdAndCreatedAtQuery
>;
export const activitiesByGroupMembershipActivitiesIdAndCreatedAt = /* GraphQL */ `query ActivitiesByGroupMembershipActivitiesIdAndCreatedAt(
  $groupMembershipActivitiesId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  activitiesByGroupMembershipActivitiesIdAndCreatedAt(
    groupMembershipActivitiesId: $groupMembershipActivitiesId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      groupId
      emoji
      groupMembership {
        id
        owner
        profileId
        groupId
        emoji
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
        __typename
      }
      groupMembershipActivitiesId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ActivitiesByGroupMembershipActivitiesIdAndCreatedAtQueryVariables,
  APITypes.ActivitiesByGroupMembershipActivitiesIdAndCreatedAtQuery
>;
export const getRecognition = /* GraphQL */ `query GetRecognition($id: ID!) {
  getRecognition(id: $id) {
    id
    owner
    activityId
    emoji
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRecognitionQueryVariables,
  APITypes.GetRecognitionQuery
>;
export const listRecognitions = /* GraphQL */ `query ListRecognitions(
  $filter: ModelRecognitionFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecognitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      activityId
      emoji
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecognitionsQueryVariables,
  APITypes.ListRecognitionsQuery
>;
export const recognitionsByActivityIdAndCreatedAt = /* GraphQL */ `query RecognitionsByActivityIdAndCreatedAt(
  $activityId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecognitionFilterInput
  $limit: Int
  $nextToken: String
) {
  recognitionsByActivityIdAndCreatedAt(
    activityId: $activityId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      activityId
      emoji
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RecognitionsByActivityIdAndCreatedAtQueryVariables,
  APITypes.RecognitionsByActivityIdAndCreatedAtQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    owner
    pushTokenGroup
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const notificationsByPushTokenGroupAndCreatedAt = /* GraphQL */ `query NotificationsByPushTokenGroupAndCreatedAt(
  $pushTokenGroup: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByPushTokenGroupAndCreatedAt(
    pushTokenGroup: $pushTokenGroup
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByPushTokenGroupAndCreatedAtQueryVariables,
  APITypes.NotificationsByPushTokenGroupAndCreatedAtQuery
>;
