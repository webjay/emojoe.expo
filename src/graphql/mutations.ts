/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProfile = /* GraphQL */ `mutation CreateProfile(
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
      nextToken
      __typename
    }
    timeZone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
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
      nextToken
      __typename
    }
    timeZone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
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
      nextToken
      __typename
    }
    timeZone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createGroup = /* GraphQL */ `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupMutationVariables,
  APITypes.CreateGroupMutation
>;
export const updateGroup = /* GraphQL */ `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupMutationVariables,
  APITypes.UpdateGroupMutation
>;
export const deleteGroup = /* GraphQL */ `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupMutationVariables,
  APITypes.DeleteGroupMutation
>;
export const createGroupMembership = /* GraphQL */ `mutation CreateGroupMembership(
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
` as GeneratedMutation<
  APITypes.CreateGroupMembershipMutationVariables,
  APITypes.CreateGroupMembershipMutation
>;
export const updateGroupMembership = /* GraphQL */ `mutation UpdateGroupMembership(
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
` as GeneratedMutation<
  APITypes.UpdateGroupMembershipMutationVariables,
  APITypes.UpdateGroupMembershipMutation
>;
export const deleteGroupMembership = /* GraphQL */ `mutation DeleteGroupMembership(
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
` as GeneratedMutation<
  APITypes.DeleteGroupMembershipMutationVariables,
  APITypes.DeleteGroupMembershipMutation
>;
export const createActivity = /* GraphQL */ `mutation CreateActivity(
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
` as GeneratedMutation<
  APITypes.CreateActivityMutationVariables,
  APITypes.CreateActivityMutation
>;
export const updateActivity = /* GraphQL */ `mutation UpdateActivity(
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
` as GeneratedMutation<
  APITypes.UpdateActivityMutationVariables,
  APITypes.UpdateActivityMutation
>;
export const deleteActivity = /* GraphQL */ `mutation DeleteActivity(
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
` as GeneratedMutation<
  APITypes.DeleteActivityMutationVariables,
  APITypes.DeleteActivityMutation
>;
export const createRecognition = /* GraphQL */ `mutation CreateRecognition(
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
` as GeneratedMutation<
  APITypes.CreateRecognitionMutationVariables,
  APITypes.CreateRecognitionMutation
>;
export const updateRecognition = /* GraphQL */ `mutation UpdateRecognition(
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
` as GeneratedMutation<
  APITypes.UpdateRecognitionMutationVariables,
  APITypes.UpdateRecognitionMutation
>;
export const deleteRecognition = /* GraphQL */ `mutation DeleteRecognition(
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
` as GeneratedMutation<
  APITypes.DeleteRecognitionMutationVariables,
  APITypes.DeleteRecognitionMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
