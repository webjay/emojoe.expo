/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
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
      timezoneOffset
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
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
        timezoneOffset
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profilesBySubId = /* GraphQL */ `
  query ProfilesBySubId(
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
        timezoneOffset
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
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
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
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
`;
export const getGroupMembership = /* GraphQL */ `
  query GetGroupMembership($id: ID!) {
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
        timezoneOffset
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
`;
export const listGroupMemberships = /* GraphQL */ `
  query ListGroupMemberships(
    $filter: ModelGroupMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMemberships(
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
          timezoneOffset
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
`;
export const groupMembershipsByProfileId = /* GraphQL */ `
  query GroupMembershipsByProfileId(
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
          timezoneOffset
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
`;
export const groupMembershipsByGroupIdAndProfileId = /* GraphQL */ `
  query GroupMembershipsByGroupIdAndProfileId(
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
          timezoneOffset
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
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
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
          timezoneOffset
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
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
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
`;
export const activitiesByGroupIdAndCreatedAt = /* GraphQL */ `
  query ActivitiesByGroupIdAndCreatedAt(
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
`;
export const activitiesByGroupMembershipActivitiesIdAndCreatedAt = /* GraphQL */ `
  query ActivitiesByGroupMembershipActivitiesIdAndCreatedAt(
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
`;
export const getRecognition = /* GraphQL */ `
  query GetRecognition($id: ID!) {
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
`;
export const listRecognitions = /* GraphQL */ `
  query ListRecognitions(
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
`;
export const recognitionsByActivityIdAndCreatedAt = /* GraphQL */ `
  query RecognitionsByActivityIdAndCreatedAt(
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
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
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
`;
export const notificationsByPushTokenGroupAndCreatedAt = /* GraphQL */ `
  query NotificationsByPushTokenGroupAndCreatedAt(
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
`;
