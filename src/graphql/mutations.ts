/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
          groupMembershipsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
          groupMembershipsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
          groupMembershipsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      memberships {
        items {
          id
          owner
          profileId
          groupId
          emoji
          createdAt
          updatedAt
          profileGroupsId
          groupMembershipsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      memberships {
        items {
          id
          owner
          profileId
          groupId
          emoji
          createdAt
          updatedAt
          profileGroupsId
          groupMembershipsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      memberships {
        items {
          id
          owner
          profileId
          groupId
          emoji
          createdAt
          updatedAt
          profileGroupsId
          groupMembershipsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGroupMembership = /* GraphQL */ `
  mutation CreateGroupMembership(
    $input: CreateGroupMembershipInput!
    $condition: ModelGroupMembershipConditionInput
  ) {
    createGroupMembership(input: $input, condition: $condition) {
      id
      owner
      profileId
      groupId
      group {
        id
        name
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
      profileGroupsId
      groupMembershipsId
    }
  }
`;
export const updateGroupMembership = /* GraphQL */ `
  mutation UpdateGroupMembership(
    $input: UpdateGroupMembershipInput!
    $condition: ModelGroupMembershipConditionInput
  ) {
    updateGroupMembership(input: $input, condition: $condition) {
      id
      owner
      profileId
      groupId
      group {
        id
        name
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
      profileGroupsId
      groupMembershipsId
    }
  }
`;
export const deleteGroupMembership = /* GraphQL */ `
  mutation DeleteGroupMembership(
    $input: DeleteGroupMembershipInput!
    $condition: ModelGroupMembershipConditionInput
  ) {
    deleteGroupMembership(input: $input, condition: $condition) {
      id
      owner
      profileId
      groupId
      group {
        id
        name
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
      profileGroupsId
      groupMembershipsId
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
        groupMembershipsId
      }
      createdAt
      updatedAt
      groupMembershipActivitiesId
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
        groupMembershipsId
      }
      createdAt
      updatedAt
      groupMembershipActivitiesId
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
        groupMembershipsId
      }
      createdAt
      updatedAt
      groupMembershipActivitiesId
    }
  }
`;
