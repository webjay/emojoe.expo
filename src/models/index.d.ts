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
  readonly groups?: (GroupProfile | null)[] | null;
  readonly username: string;
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
  readonly groups: AsyncCollection<GroupProfile>;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Profiles?: (GroupProfile | null)[] | null;
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
  readonly Profiles: AsyncCollection<GroupProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerEmoji = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emoji, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group?: Group | null;
  readonly emoji: string;
  readonly Profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly emojiGroupId?: string | null;
  readonly emojiProfileId?: string | null;
}

type LazyEmoji = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emoji, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: AsyncItem<Group | undefined>;
  readonly emoji: string;
  readonly Profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly emojiGroupId?: string | null;
  readonly emojiProfileId?: string | null;
}

export declare type Emoji = LazyLoading extends LazyLoadingDisabled ? EagerEmoji : LazyEmoji

export declare const Emoji: (new (init: ModelInit<Emoji>) => Emoji) & {
  copyOf(source: Emoji, mutator: (draft: MutableModel<Emoji>) => MutableModel<Emoji> | void): Emoji;
}

type EagerActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: Group;
  readonly Profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityGroupId: string;
  readonly activityProfileId?: string | null;
}

type LazyActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: AsyncItem<Group>;
  readonly Profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityGroupId: string;
  readonly activityProfileId?: string | null;
}

export declare type Activity = LazyLoading extends LazyLoadingDisabled ? EagerActivity : LazyActivity

export declare const Activity: (new (init: ModelInit<Activity>) => Activity) & {
  copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

type EagerGroupProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileId?: string | null;
  readonly groupId?: string | null;
  readonly profile: Profile;
  readonly group: Group;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileId?: string | null;
  readonly groupId?: string | null;
  readonly profile: AsyncItem<Profile>;
  readonly group: AsyncItem<Group>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupProfile = LazyLoading extends LazyLoadingDisabled ? EagerGroupProfile : LazyGroupProfile

export declare const GroupProfile: (new (init: ModelInit<GroupProfile>) => GroupProfile) & {
  copyOf(source: GroupProfile, mutator: (draft: MutableModel<GroupProfile>) => MutableModel<GroupProfile> | void): GroupProfile;
}