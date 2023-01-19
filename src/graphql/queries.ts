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
      groups {
        items {
          id
          owner
          profileId
          groupId
          emoji
          createdAt
          updatedAt
          profileGroupsId
          groupProfilesId
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
        groups {
          nextToken
        }
        createdAt
        updatedAt
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
      profiles {
        items {
          id
          owner
          profileId
          groupId
          emoji
          createdAt
          updatedAt
          profileGroupsId
          groupProfilesId
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
        profiles {
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
        profiles {
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
        groups {
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
          createdAt
          updatedAt
          groupMembershipActivitiesId
        }
        nextToken
      }
      createdAt
      updatedAt
      profileGroupsId
      groupProfilesId
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
          createdAt
          updatedAt
        }
        profile {
          id
          subId
          owner
          name
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupsId
        groupProfilesId
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
      groupMembership {
        id
        owner
        profileId
        groupId
        group {
          id
          name
          createdAt
          updatedAt
        }
        profile {
          id
          subId
          owner
          name
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupsId
        groupProfilesId
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
        groupMembership {
          id
          owner
          profileId
          groupId
          emoji
          createdAt
          updatedAt
          profileGroupsId
          groupProfilesId
        }
        createdAt
        updatedAt
        groupMembershipActivitiesId
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
        groups {
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
          createdAt
          updatedAt
        }
        profile {
          id
          subId
          owner
          name
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupsId
        groupProfilesId
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
          createdAt
          updatedAt
        }
        profile {
          id
          subId
          owner
          name
          createdAt
          updatedAt
        }
        emoji
        activities {
          nextToken
        }
        createdAt
        updatedAt
        profileGroupsId
        groupProfilesId
      }
      nextToken
    }
  }
`;
