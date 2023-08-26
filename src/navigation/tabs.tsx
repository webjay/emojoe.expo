import React from 'react';
import type { ComponentProps } from 'react';
import { Tabs } from 'expo-router';
import type { ParamListBase } from '@react-navigation/native';
import type {
  BottomTabScreenProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Icon = ComponentProps<typeof MaterialCommunityIcons>['name'];

const routes = {
  '(tabs)/index': {
    title: 'Home',
    icon: 'flag-checkered',
  },
  '(tabs)/groups': {
    title: 'Groups',
    icon: 'account-group',
  },
  '(tabs)/profile': {
    title: 'Profile',
    icon: 'face-woman-profile',
  },
};

function screenOptions({
  route: { name },
}: BottomTabScreenProps<ParamListBase>): BottomTabNavigationOptions {
  const route = routes[name as keyof typeof routes];
  if (!route) return {};
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarLabelStyle: {
      display: 'none',
    },
    title: route.title ? `${route.title} | Emojoe` : 'Emojoe',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons
        name={route.icon as Icon}
        color={color}
        size={size}
      />
    ),
  };
}

export default function Tab() {
  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen name="(tabs)/index" />
      <Tabs.Screen name="(tabs)/groups" />
      <Tabs.Screen name="(tabs)/profile" />
      <Tabs.Screen
        name="(stack)"
        options={{ href: null, headerShown: false }}
      />
    </Tabs>
  );
}
