import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerEmoji = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emoji, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group?: Group | null;
  readonly emoji: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly emojiGroupId?: string | null;
}

type LazyEmoji = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emoji, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: AsyncItem<Group | undefined>;
  readonly emoji: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly emojiGroupId?: string | null;
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
  readonly members?: string[] | null;
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
  readonly members?: string[] | null;
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
  readonly Group: Group;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityGroupId: string;
}

type LazyActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Group: AsyncItem<Group>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityGroupId: string;
}

export declare type Activity = LazyLoading extends LazyLoadingDisabled ? EagerActivity : LazyActivity

export declare const Activity: (new (init: ModelInit<Activity>) => Activity) & {
  copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}