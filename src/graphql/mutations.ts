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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createRecognition = /* GraphQL */ `
  mutation CreateRecognition(
    $input: CreateRecognitionInput!
    $condition: ModelRecognitionConditionInput
  ) {
    createRecognition(input: $input, condition: $condition) {
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
export const updateRecognition = /* GraphQL */ `
  mutation UpdateRecognition(
    $input: UpdateRecognitionInput!
    $condition: ModelRecognitionConditionInput
  ) {
    updateRecognition(input: $input, condition: $condition) {
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
export const deleteRecognition = /* GraphQL */ `
  mutation DeleteRecognition(
    $input: DeleteRecognitionInput!
    $condition: ModelRecognitionConditionInput
  ) {
    deleteRecognition(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
  }
`;
