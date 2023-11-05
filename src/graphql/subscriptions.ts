/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/api";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile(
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
      nextToken
      __typename
    }
    timeZone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile(
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
      nextToken
      __typename
    }
    timeZone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile(
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
      nextToken
      __typename
    }
    timeZone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onCreateGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onUpdateGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
  onDeleteGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onCreateGroupMembership = /* GraphQL */ `subscription OnCreateGroupMembership(
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
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupMembershipSubscriptionVariables,
  APITypes.OnCreateGroupMembershipSubscription
>;
export const onUpdateGroupMembership = /* GraphQL */ `subscription OnUpdateGroupMembership(
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupMembershipSubscriptionVariables,
  APITypes.OnUpdateGroupMembershipSubscription
>;
export const onDeleteGroupMembership = /* GraphQL */ `subscription OnDeleteGroupMembership(
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupMembershipSubscriptionVariables,
  APITypes.OnDeleteGroupMembershipSubscription
>;
export const onCreateActivity = /* GraphQL */ `subscription OnCreateActivity(
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
}
` as GeneratedSubscription<
  APITypes.OnCreateActivitySubscriptionVariables,
  APITypes.OnCreateActivitySubscription
>;
export const onUpdateActivity = /* GraphQL */ `subscription OnUpdateActivity(
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateActivitySubscriptionVariables,
  APITypes.OnUpdateActivitySubscription
>;
export const onDeleteActivity = /* GraphQL */ `subscription OnDeleteActivity(
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteActivitySubscriptionVariables,
  APITypes.OnDeleteActivitySubscription
>;
export const onCreateRecognition = /* GraphQL */ `subscription OnCreateRecognition(
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
` as GeneratedSubscription<
  APITypes.OnCreateRecognitionSubscriptionVariables,
  APITypes.OnCreateRecognitionSubscription
>;
export const onUpdateRecognition = /* GraphQL */ `subscription OnUpdateRecognition(
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecognitionSubscriptionVariables,
  APITypes.OnUpdateRecognitionSubscription
>;
export const onDeleteRecognition = /* GraphQL */ `subscription OnDeleteRecognition(
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecognitionSubscriptionVariables,
  APITypes.OnDeleteRecognitionSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
