/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  subId: string,
  owner?: string | null,
  name?: string | null,
  pushToken?: string | null,
  timeZone?: string | null,
};

export type ModelProfileConditionInput = {
  subId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  subId: string,
  owner?: string | null,
  name?: string | null,
  pushToken?: string | null,
  groupMemberships?: ModelGroupMembershipConnection | null,
  timeZone?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGroupMembershipConnection = {
  __typename: "ModelGroupMembershipConnection",
  items:  Array<GroupMembership | null >,
  nextToken?: string | null,
};

export type GroupMembership = {
  __typename: "GroupMembership",
  id: string,
  owner?: string | null,
  profileId: string,
  groupId: string,
  group: Group,
  profile: Profile,
  emoji?: string | null,
  activities?: ModelActivityConnection | null,
  createdAt: string,
  updatedAt: string,
  profileGroupMembershipsId?: string | null,
  groupMembershipsId?: string | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  emoji?: string | null,
  memberships?: ModelGroupMembershipConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items:  Array<Activity | null >,
  nextToken?: string | null,
};

export type Activity = {
  __typename: "Activity",
  id: string,
  owner?: string | null,
  groupId: string,
  emoji: string,
  groupMembership: GroupMembership,
  groupMembershipActivitiesId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileInput = {
  id: string,
  subId?: string | null,
  owner?: string | null,
  name?: string | null,
  pushToken?: string | null,
  timeZone?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateGroupInput = {
  id?: string | null,
  name: string,
  emoji?: string | null,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  emoji?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
  emoji?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateGroupMembershipInput = {
  id?: string | null,
  owner?: string | null,
  profileId: string,
  groupId: string,
  emoji?: string | null,
  profileGroupMembershipsId?: string | null,
  groupMembershipsId?: string | null,
};

export type ModelGroupMembershipConditionInput = {
  owner?: ModelStringInput | null,
  profileId?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  emoji?: ModelStringInput | null,
  and?: Array< ModelGroupMembershipConditionInput | null > | null,
  or?: Array< ModelGroupMembershipConditionInput | null > | null,
  not?: ModelGroupMembershipConditionInput | null,
  profileGroupMembershipsId?: ModelIDInput | null,
  groupMembershipsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateGroupMembershipInput = {
  id: string,
  owner?: string | null,
  profileId?: string | null,
  groupId?: string | null,
  emoji?: string | null,
  profileGroupMembershipsId?: string | null,
  groupMembershipsId?: string | null,
};

export type DeleteGroupMembershipInput = {
  id: string,
};

export type CreateActivityInput = {
  id?: string | null,
  owner?: string | null,
  groupId: string,
  emoji: string,
  groupMembershipActivitiesId: string,
  createdAt?: string | null,
};

export type ModelActivityConditionInput = {
  owner?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  emoji?: ModelStringInput | null,
  groupMembershipActivitiesId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type UpdateActivityInput = {
  id: string,
  owner?: string | null,
  groupId?: string | null,
  emoji?: string | null,
  groupMembershipActivitiesId?: string | null,
  createdAt?: string | null,
};

export type DeleteActivityInput = {
  id: string,
};

export type CreateRecognitionInput = {
  id?: string | null,
  owner?: string | null,
  activityId: string,
  emoji: string,
  createdAt?: string | null,
};

export type ModelRecognitionConditionInput = {
  owner?: ModelStringInput | null,
  activityId?: ModelIDInput | null,
  emoji?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelRecognitionConditionInput | null > | null,
  or?: Array< ModelRecognitionConditionInput | null > | null,
  not?: ModelRecognitionConditionInput | null,
};

export type Recognition = {
  __typename: "Recognition",
  id: string,
  owner?: string | null,
  activityId: string,
  emoji: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRecognitionInput = {
  id: string,
  owner?: string | null,
  activityId?: string | null,
  emoji?: string | null,
  createdAt?: string | null,
};

export type DeleteRecognitionInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  owner?: string | null,
  pushTokenGroup: string,
  createdAt?: string | null,
};

export type ModelNotificationConditionInput = {
  owner?: ModelStringInput | null,
  pushTokenGroup?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  owner?: string | null,
  pushTokenGroup: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotificationInput = {
  id: string,
  owner?: string | null,
  pushTokenGroup?: string | null,
  createdAt?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  subId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  emoji?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelGroupMembershipFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  profileId?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  emoji?: ModelStringInput | null,
  and?: Array< ModelGroupMembershipFilterInput | null > | null,
  or?: Array< ModelGroupMembershipFilterInput | null > | null,
  not?: ModelGroupMembershipFilterInput | null,
  profileGroupMembershipsId?: ModelIDInput | null,
  groupMembershipsId?: ModelIDInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  emoji?: ModelStringInput | null,
  groupMembershipActivitiesId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelRecognitionFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  activityId?: ModelIDInput | null,
  emoji?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelRecognitionFilterInput | null > | null,
  or?: Array< ModelRecognitionFilterInput | null > | null,
  not?: ModelRecognitionFilterInput | null,
};

export type ModelRecognitionConnection = {
  __typename: "ModelRecognitionConnection",
  items:  Array<Recognition | null >,
  nextToken?: string | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  pushTokenGroup?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  subId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  pushToken?: ModelSubscriptionStringInput | null,
  timeZone?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  emoji?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
};

export type ModelSubscriptionGroupMembershipFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  profileId?: ModelSubscriptionIDInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  emoji?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupMembershipFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupMembershipFilterInput | null > | null,
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  emoji?: ModelSubscriptionStringInput | null,
  groupMembershipActivitiesId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityFilterInput | null > | null,
};

export type ModelSubscriptionRecognitionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  activityId?: ModelSubscriptionIDInput | null,
  emoji?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRecognitionFilterInput | null > | null,
  or?: Array< ModelSubscriptionRecognitionFilterInput | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pushTokenGroup?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    subId: string,
    owner?: string | null,
    name?: string | null,
    pushToken?: string | null,
    groupMemberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeZone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    subId: string,
    owner?: string | null,
    name?: string | null,
    pushToken?: string | null,
    groupMemberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeZone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    subId: string,
    owner?: string | null,
    name?: string | null,
    pushToken?: string | null,
    groupMemberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeZone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    emoji?: string | null,
    memberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    emoji?: string | null,
    memberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    emoji?: string | null,
    memberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMembershipMutationVariables = {
  input: CreateGroupMembershipInput,
  condition?: ModelGroupMembershipConditionInput | null,
};

export type CreateGroupMembershipMutation = {
  createGroupMembership?:  {
    __typename: "GroupMembership",
    id: string,
    owner?: string | null,
    profileId: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    profile:  {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    emoji?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        owner?: string | null,
        groupId: string,
        emoji: string,
        groupMembershipActivitiesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileGroupMembershipsId?: string | null,
    groupMembershipsId?: string | null,
  } | null,
};

export type UpdateGroupMembershipMutationVariables = {
  input: UpdateGroupMembershipInput,
  condition?: ModelGroupMembershipConditionInput | null,
};

export type UpdateGroupMembershipMutation = {
  updateGroupMembership?:  {
    __typename: "GroupMembership",
    id: string,
    owner?: string | null,
    profileId: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    profile:  {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    emoji?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        owner?: string | null,
        groupId: string,
        emoji: string,
        groupMembershipActivitiesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileGroupMembershipsId?: string | null,
    groupMembershipsId?: string | null,
  } | null,
};

export type DeleteGroupMembershipMutationVariables = {
  input: DeleteGroupMembershipInput,
  condition?: ModelGroupMembershipConditionInput | null,
};

export type DeleteGroupMembershipMutation = {
  deleteGroupMembership?:  {
    __typename: "GroupMembership",
    id: string,
    owner?: string | null,
    profileId: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    profile:  {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    emoji?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        owner?: string | null,
        groupId: string,
        emoji: string,
        groupMembershipActivitiesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileGroupMembershipsId?: string | null,
    groupMembershipsId?: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    owner?: string | null,
    groupId: string,
    emoji: string,
    groupMembership:  {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    },
    groupMembershipActivitiesId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    owner?: string | null,
    groupId: string,
    emoji: string,
    groupMembership:  {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    },
    groupMembershipActivitiesId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    owner?: string | null,
    groupId: string,
    emoji: string,
    groupMembership:  {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    },
    groupMembershipActivitiesId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecognitionMutationVariables = {
  input: CreateRecognitionInput,
  condition?: ModelRecognitionConditionInput | null,
};

export type CreateRecognitionMutation = {
  createRecognition?:  {
    __typename: "Recognition",
    id: string,
    owner?: string | null,
    activityId: string,
    emoji: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecognitionMutationVariables = {
  input: UpdateRecognitionInput,
  condition?: ModelRecognitionConditionInput | null,
};

export type UpdateRecognitionMutation = {
  updateRecognition?:  {
    __typename: "Recognition",
    id: string,
    owner?: string | null,
    activityId: string,
    emoji: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecognitionMutationVariables = {
  input: DeleteRecognitionInput,
  condition?: ModelRecognitionConditionInput | null,
};

export type DeleteRecognitionMutation = {
  deleteRecognition?:  {
    __typename: "Recognition",
    id: string,
    owner?: string | null,
    activityId: string,
    emoji: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    owner?: string | null,
    pushTokenGroup: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    owner?: string | null,
    pushTokenGroup: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    owner?: string | null,
    pushTokenGroup: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    subId: string,
    owner?: string | null,
    name?: string | null,
    pushToken?: string | null,
    groupMemberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeZone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfilesBySubIdQueryVariables = {
  subId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilesBySubIdQuery = {
  profilesBySubId?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    emoji?: string | null,
    memberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupMembershipQueryVariables = {
  id: string,
};

export type GetGroupMembershipQuery = {
  getGroupMembership?:  {
    __typename: "GroupMembership",
    id: string,
    owner?: string | null,
    profileId: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    profile:  {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    emoji?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        owner?: string | null,
        groupId: string,
        emoji: string,
        groupMembershipActivitiesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileGroupMembershipsId?: string | null,
    groupMembershipsId?: string | null,
  } | null,
};

export type ListGroupMembershipsQueryVariables = {
  filter?: ModelGroupMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupMembershipsQuery = {
  listGroupMemberships?:  {
    __typename: "ModelGroupMembershipConnection",
    items:  Array< {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupMembershipsByProfileIdQueryVariables = {
  profileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupMembershipsByProfileIdQuery = {
  groupMembershipsByProfileId?:  {
    __typename: "ModelGroupMembershipConnection",
    items:  Array< {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupMembershipsByGroupIdAndProfileIdQueryVariables = {
  groupId: string,
  profileId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupMembershipsByGroupIdAndProfileIdQuery = {
  groupMembershipsByGroupIdAndProfileId?:  {
    __typename: "ModelGroupMembershipConnection",
    items:  Array< {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    owner?: string | null,
    groupId: string,
    emoji: string,
    groupMembership:  {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    },
    groupMembershipActivitiesId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      owner?: string | null,
      groupId: string,
      emoji: string,
      groupMembership:  {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      },
      groupMembershipActivitiesId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ActivitiesByGroupIdAndCreatedAtQueryVariables = {
  groupId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActivitiesByGroupIdAndCreatedAtQuery = {
  activitiesByGroupIdAndCreatedAt?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      owner?: string | null,
      groupId: string,
      emoji: string,
      groupMembership:  {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      },
      groupMembershipActivitiesId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ActivitiesByGroupMembershipActivitiesIdAndCreatedAtQueryVariables = {
  groupMembershipActivitiesId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActivitiesByGroupMembershipActivitiesIdAndCreatedAtQuery = {
  activitiesByGroupMembershipActivitiesIdAndCreatedAt?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      owner?: string | null,
      groupId: string,
      emoji: string,
      groupMembership:  {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      },
      groupMembershipActivitiesId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRecognitionQueryVariables = {
  id: string,
};

export type GetRecognitionQuery = {
  getRecognition?:  {
    __typename: "Recognition",
    id: string,
    owner?: string | null,
    activityId: string,
    emoji: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecognitionsQueryVariables = {
  filter?: ModelRecognitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecognitionsQuery = {
  listRecognitions?:  {
    __typename: "ModelRecognitionConnection",
    items:  Array< {
      __typename: "Recognition",
      id: string,
      owner?: string | null,
      activityId: string,
      emoji: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RecognitionsByActivityIdAndCreatedAtQueryVariables = {
  activityId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecognitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RecognitionsByActivityIdAndCreatedAtQuery = {
  recognitionsByActivityIdAndCreatedAt?:  {
    __typename: "ModelRecognitionConnection",
    items:  Array< {
      __typename: "Recognition",
      id: string,
      owner?: string | null,
      activityId: string,
      emoji: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    owner?: string | null,
    pushTokenGroup: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      owner?: string | null,
      pushTokenGroup: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByPushTokenGroupAndCreatedAtQueryVariables = {
  pushTokenGroup: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByPushTokenGroupAndCreatedAtQuery = {
  notificationsByPushTokenGroupAndCreatedAt?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      owner?: string | null,
      pushTokenGroup: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    subId: string,
    owner?: string | null,
    name?: string | null,
    pushToken?: string | null,
    groupMemberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeZone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    subId: string,
    owner?: string | null,
    name?: string | null,
    pushToken?: string | null,
    groupMemberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeZone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    subId: string,
    owner?: string | null,
    name?: string | null,
    pushToken?: string | null,
    groupMemberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    timeZone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    emoji?: string | null,
    memberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    emoji?: string | null,
    memberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    emoji?: string | null,
    memberships?:  {
      __typename: "ModelGroupMembershipConnection",
      items:  Array< {
        __typename: "GroupMembership",
        id: string,
        owner?: string | null,
        profileId: string,
        groupId: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
        profileGroupMembershipsId?: string | null,
        groupMembershipsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionGroupMembershipFilterInput | null,
  owner?: string | null,
};

export type OnCreateGroupMembershipSubscription = {
  onCreateGroupMembership?:  {
    __typename: "GroupMembership",
    id: string,
    owner?: string | null,
    profileId: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    profile:  {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    emoji?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        owner?: string | null,
        groupId: string,
        emoji: string,
        groupMembershipActivitiesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileGroupMembershipsId?: string | null,
    groupMembershipsId?: string | null,
  } | null,
};

export type OnUpdateGroupMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionGroupMembershipFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGroupMembershipSubscription = {
  onUpdateGroupMembership?:  {
    __typename: "GroupMembership",
    id: string,
    owner?: string | null,
    profileId: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    profile:  {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    emoji?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        owner?: string | null,
        groupId: string,
        emoji: string,
        groupMembershipActivitiesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileGroupMembershipsId?: string | null,
    groupMembershipsId?: string | null,
  } | null,
};

export type OnDeleteGroupMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionGroupMembershipFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGroupMembershipSubscription = {
  onDeleteGroupMembership?:  {
    __typename: "GroupMembership",
    id: string,
    owner?: string | null,
    profileId: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      emoji?: string | null,
      memberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    profile:  {
      __typename: "Profile",
      id: string,
      subId: string,
      owner?: string | null,
      name?: string | null,
      pushToken?: string | null,
      groupMemberships?:  {
        __typename: "ModelGroupMembershipConnection",
        nextToken?: string | null,
      } | null,
      timeZone?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    emoji?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        owner?: string | null,
        groupId: string,
        emoji: string,
        groupMembershipActivitiesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileGroupMembershipsId?: string | null,
    groupMembershipsId?: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    owner?: string | null,
    groupId: string,
    emoji: string,
    groupMembership:  {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    },
    groupMembershipActivitiesId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    owner?: string | null,
    groupId: string,
    emoji: string,
    groupMembership:  {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    },
    groupMembershipActivitiesId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    owner?: string | null,
    groupId: string,
    emoji: string,
    groupMembership:  {
      __typename: "GroupMembership",
      id: string,
      owner?: string | null,
      profileId: string,
      groupId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        emoji?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      profile:  {
        __typename: "Profile",
        id: string,
        subId: string,
        owner?: string | null,
        name?: string | null,
        pushToken?: string | null,
        timeZone?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      emoji?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profileGroupMembershipsId?: string | null,
      groupMembershipsId?: string | null,
    },
    groupMembershipActivitiesId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecognitionSubscriptionVariables = {
  filter?: ModelSubscriptionRecognitionFilterInput | null,
  owner?: string | null,
};

export type OnCreateRecognitionSubscription = {
  onCreateRecognition?:  {
    __typename: "Recognition",
    id: string,
    owner?: string | null,
    activityId: string,
    emoji: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecognitionSubscriptionVariables = {
  filter?: ModelSubscriptionRecognitionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRecognitionSubscription = {
  onUpdateRecognition?:  {
    __typename: "Recognition",
    id: string,
    owner?: string | null,
    activityId: string,
    emoji: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecognitionSubscriptionVariables = {
  filter?: ModelSubscriptionRecognitionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRecognitionSubscription = {
  onDeleteRecognition?:  {
    __typename: "Recognition",
    id: string,
    owner?: string | null,
    activityId: string,
    emoji: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    owner?: string | null,
    pushTokenGroup: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    owner?: string | null,
    pushTokenGroup: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    owner?: string | null,
    pushTokenGroup: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
