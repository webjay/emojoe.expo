/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateGroupMembership = /* GraphQL */ `
  subscription OnCreateGroupMembership(
    $filter: ModelSubscriptionGroupMembershipFilterInput
    $owner: String
  ) {
    onCreateGroupMembership(filter: $filter, owner: $owner) {
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
export const onUpdateGroupMembership = /* GraphQL */ `
  subscription OnUpdateGroupMembership(
    $filter: ModelSubscriptionGroupMembershipFilterInput
    $owner: String
  ) {
    onUpdateGroupMembership(filter: $filter, owner: $owner) {
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
export const onDeleteGroupMembership = /* GraphQL */ `
  subscription OnDeleteGroupMembership(
    $filter: ModelSubscriptionGroupMembershipFilterInput
    $owner: String
  ) {
    onDeleteGroupMembership(filter: $filter, owner: $owner) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onCreateActivity(filter: $filter, owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onUpdateActivity(filter: $filter, owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onDeleteActivity(filter: $filter, owner: $owner) {
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
