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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      profile {
        id
        subId
        owner
        name
        pushToken
        groupMemberships {
          nextToken
        }
        createdAt
        updatedAt
      }
      emoji
      activities {
        items {
          id
          owner
          groupId
          emoji
          createdAt
          updatedAt
          groupMembershipActivitiesId
        }
        nextToken
      }
      createdAt
      updatedAt
      profileGroupMembershipsId
      groupMembershipsId
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
        }
        profile {
          id
          subId
          owner
          name
          pushToken
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
      }
      nextToken
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
        }
        profile {
          id
          subId
          owner
          name
          pushToken
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
      }
      createdAt
      updatedAt
      groupMembershipActivitiesId
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
        }
        createdAt
        updatedAt
        groupMembershipActivitiesId
      }
      nextToken
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
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      owner
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        profile {
          id
          subId
          owner
          name
          pushToken
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
      }
      nextToken
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
        }
        profile {
          id
          subId
          owner
          name
          pushToken
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupMembershipsId
        groupMembershipsId
      }
      nextToken
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
        }
        createdAt
        updatedAt
        groupMembershipActivitiesId
      }
      nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
