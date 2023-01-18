import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subId: string;
  readonly name?: string | null;
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
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerEmoji = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emoji, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emoji: string;
  readonly Group?: Group | null;
  readonly Profile: Profile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly emojiGroupId?: string | null;
  readonly emojiProfileId: string;
}

type LazyEmoji = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emoji, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emoji: string;
  readonly Group: AsyncItem<Group | undefined>;
  readonly Profile: AsyncItem<Profile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly emojiGroupId?: string | null;
  readonly emojiProfileId: string;
}

export declare type Emoji = LazyLoading extends LazyLoadingDisabled ? EagerEmoji : LazyEmoji

export declare const Emoji: (new (init: ModelInit<Emoji>) => Emoji) & {
  copyOf(source: Emoji, mutator: (draft: MutableModel<Emoji>) => MutableModel<Emoji> | void): Emoji;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerGroupMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: Group;
  readonly Profile: Profile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMemberGroupId: string;
  readonly groupMemberProfileId: string;
}

type LazyGroupMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: AsyncItem<Group>;
  readonly Profile: AsyncItem<Profile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMemberGroupId: string;
  readonly groupMemberProfileId: string;
}

export declare type GroupMember = LazyLoading extends LazyLoadingDisabled ? EagerGroupMember : LazyGroupMember

export declare const GroupMember: (new (init: ModelInit<GroupMember>) => GroupMember) & {
  copyOf(source: GroupMember, mutator: (draft: MutableModel<GroupMember>) => MutableModel<GroupMember> | void): GroupMember;
}

type EagerActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: Group;
  readonly Profile: Profile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityGroupId: string;
  readonly activityProfileId: string;
}

type LazyActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: AsyncItem<Group>;
  readonly Profile: AsyncItem<Profile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityGroupId: string;
  readonly activityProfileId: string;
}

export declare type Activity = LazyLoading extends LazyLoadingDisabled ? EagerActivity : LazyActivity

export declare const Activity: (new (init: ModelInit<Activity>) => Activity) & {
  copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}