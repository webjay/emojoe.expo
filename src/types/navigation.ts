import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerScreenProps } from '@react-navigation/drawer';

export type StackNavigatorParamList = {
  Drawer: undefined | { screen: keyof DrawerNavigatorParamList };
  Done: { groupId: string, emoji: string };
  GroupActivity: { groupId: string };
  GroupEdit: { groupId: string } | undefined;
  GroupLeave: { groupId: string };
  GroupInvite: { groupId: string };
  GroupJoin: { groupId: string };
  GroupEmoji: { groupId: string };
};

export type DrawerNavigatorParamList = {
  Home: undefined;
  Groups: undefined;
  Profile: undefined;
  LogOut: undefined;
};

export type ScreenPropsDrawer<T extends keyof DrawerNavigatorParamList> = CompositeScreenProps<
DrawerScreenProps<DrawerNavigatorParamList, T, 'DrawerNavigator'>,
NativeStackScreenProps<StackNavigatorParamList>
>;

export type ScreenPropsStack<T extends keyof StackNavigatorParamList> = CompositeScreenProps<
NativeStackScreenProps<StackNavigatorParamList, T, 'StackNavigator'>,
DrawerScreenProps<DrawerNavigatorParamList>
>;

interface ParamList extends StackNavigatorParamList {}
interface ParamList extends DrawerNavigatorParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}
