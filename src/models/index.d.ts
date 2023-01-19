import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subId: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly groups?: (GroupMembership | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subId: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly groups: AsyncCollection<GroupMembership>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerGroupMembership = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMembership, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly profileId: string;
  readonly groupId: string;
  readonly group: Group;
  readonly profile: Profile;
  readonly emoji?: string | null;
  readonly activities?: (Activity | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileGroupsId?: string | null;
  readonly groupProfilesId?: string | null;
}

type LazyGroupMembership = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMembership, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly profileId: string;
  readonly groupId: string;
  readonly group: AsyncItem<Group>;
  readonly profile: AsyncItem<Profile>;
  readonly emoji?: string | null;
  readonly activities: AsyncCollection<Activity>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileGroupsId?: string | null;
  readonly groupProfilesId?: string | null;
}

export declare type GroupMembership = LazyLoading extends LazyLoadingDisabled ? EagerGroupMembership : LazyGroupMembership

export declare const GroupMembership: (new (init: ModelInit<GroupMembership>) => GroupMembership) & {
  copyOf(source: GroupMembership, mutator: (draft: MutableModel<GroupMembership>) => MutableModel<GroupMembership> | void): GroupMembership;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly profiles?: (GroupMembership | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly profiles: AsyncCollection<GroupMembership>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly groupMembership: GroupMembership;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMembershipActivitiesId?: string | null;
}

type LazyActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly groupMembership: AsyncItem<GroupMembership>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMembershipActivitiesId?: string | null;
}

export declare type Activity = LazyLoading extends LazyLoadingDisabled ? EagerActivity : LazyActivity

export declare const Activity: (new (init: ModelInit<Activity>) => Activity) & {
  copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}