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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
