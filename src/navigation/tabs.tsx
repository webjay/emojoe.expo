import React from 'react';
import { Tabs } from 'expo-router';
import type { ParamListBase } from '@react-navigation/native';
import type {
  BottomTabScreenProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

type Icon = 'home' | 'group' | 'account-circle';

const routes = {
  '(tabs)/index': {
    title: 'Home',
    icon: 'home',
  },
  '(tabs)/groups': {
    title: 'Groups',
    icon: 'all-inclusive',
  },
  '(tabs)/profile': {
    title: 'Profile',
    icon: 'face',
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
      <MaterialIcons name={route.icon as Icon} color={color} size={size} />
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
      <Tabs.Screen
        name="[...unmatched]"
        options={{ href: null, headerShown: false }}
      />
    </Tabs>
  );
}
