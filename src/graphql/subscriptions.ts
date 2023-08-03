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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onCreateActivity(filter: $filter, owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onUpdateActivity(filter: $filter, owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onDeleteActivity(filter: $filter, owner: $owner) {
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
export const onCreateRecognition = /* GraphQL */ `
  subscription OnCreateRecognition(
    $filter: ModelSubscriptionRecognitionFilterInput
    $owner: String
  ) {
    onCreateRecognition(filter: $filter, owner: $owner) {
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
export const onUpdateRecognition = /* GraphQL */ `
  subscription OnUpdateRecognition(
    $filter: ModelSubscriptionRecognitionFilterInput
    $owner: String
  ) {
    onUpdateRecognition(filter: $filter, owner: $owner) {
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
export const onDeleteRecognition = /* GraphQL */ `
  subscription OnDeleteRecognition(
    $filter: ModelSubscriptionRecognitionFilterInput
    $owner: String
  ) {
    onDeleteRecognition(filter: $filter, owner: $owner) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onCreateNotification(filter: $filter, owner: $owner) {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onUpdateNotification(filter: $filter, owner: $owner) {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onDeleteNotification(filter: $filter, owner: $owner) {
      id
      owner
      pushTokenGroup
      createdAt
      updatedAt
      __typename
    }
  }
`;
