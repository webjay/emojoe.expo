/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
  BigInt: any;
  Double: any;
};

export type Activity = {
  __typename?: 'Activity';
  createdAt: Scalars['AWSDateTime'];
  emoji: Scalars['String'];
  groupId: Scalars['ID'];
  groupMembership: GroupMembership;
  groupMembershipActivitiesId: Scalars['ID'];
  id: Scalars['ID'];
  owner?: Maybe<Scalars['String']>;
};

export type Group = {
  __typename?: 'Group';
  emoji?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  memberships?: Maybe<Array<Maybe<GroupMembership>>>;
  name: Scalars['String'];
};

export type GroupMembership = {
  __typename?: 'GroupMembership';
  activities?: Maybe<Array<Maybe<Activity>>>;
  emoji?: Maybe<Scalars['String']>;
  group: Group;
  groupId: Scalars['ID'];
  id: Scalars['ID'];
  owner?: Maybe<Scalars['String']>;
  profile: Profile;
  profileId: Scalars['ID'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  owner?: Maybe<Scalars['String']>;
  pushTokenGroup: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  groupMemberships?: Maybe<Array<Maybe<GroupMembership>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  pushToken?: Maybe<Scalars['String']>;
  subId: Scalars['String'];
};

export type Recognition = {
  __typename?: 'Recognition';
  activityId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  emoji: Scalars['String'];
  id: Scalars['ID'];
  owner?: Maybe<Scalars['String']>;
};
