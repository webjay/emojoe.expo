import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Drawer from './drawer';
import DoneScreen from '../screens/done';
import GroupEditScreen from '../screens/group-edit';
import GroupInviteScreen from '../screens/group-invite';
import GroupJoinScreen from '../screens/group-join';
import GroupEmojiScreen from '../screens/group-emoji';
import GroupLeaveScreen from '../screens/group-leave';
import type { StackNavigatorParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

function options(stackOptions?: NativeStackNavigationOptions) {
  return {
    headerBackTitleVisible: false,
    ...stackOptions,
  };
}

export default function StackNavigator() {
  return (
    <Stack.Navigator id="StackNavigator">
      <Stack.Screen name="Drawer" component={Drawer} options={options({ headerShown: false })} />
      <Stack.Screen
        name="Done"
        component={DoneScreen}
        options={options({
          headerShown: false,
          gestureEnabled: false,
        })}
      />
      <Stack.Screen
        name="GroupEdit"
        component={GroupEditScreen}
        options={options({ title: 'Create Group' })}
      />
      <Stack.Screen
        name="GroupEmoji"
        component={GroupEmojiScreen}
        options={options({ title: 'Group Emoji' })}
      />
      <Stack.Screen
        name="GroupInvite"
        component={GroupInviteScreen}
        options={options({ title: 'Group Invite' })}
      />
      <Stack.Screen
        name="GroupJoin"
        component={GroupJoinScreen}
        options={options({ title: 'Join Group' })}
      />
      <Stack.Screen
        name="GroupLeave"
        component={GroupLeaveScreen}
        options={options({ title: 'Leave Group' })}
      />
    </Stack.Navigator>
  );
}
