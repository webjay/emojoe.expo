import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import { DrawerNavigatorParamList } from '../types/navigation';
import HomeScreen from '../screens/home';
import GroupsScreen from '../screens/groups';
import ProfileScreen from '../screens/profile';
import SettingsScreen from '../screens/settings';
import ExitScreen from '../screens/exit';
import headerGroupRight from '../components/HeaderButtonGroupCreate';

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

export default function DrawerNavigator() {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      id="DrawerNavigator"
      screenOptions={{ headerTintColor: colors.onPrimaryContainer }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Emojoe' }}
      />
      <Drawer.Screen
        name="Groups"
        component={GroupsScreen}
        options={{ headerRight: headerGroupRight }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen
        name="LogOut"
        component={ExitScreen}
        options={{ title: 'Log Out' }}
      />
    </Drawer.Navigator>
  );
}
