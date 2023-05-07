import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme } from 'react-native-paper';
import {
  DefaultTheme as reactNavigationLight,
  DarkTheme as reactNavigationDark,
} from '@react-navigation/native';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight,
  reactNavigationDark,
});

export default function useNavigationTheme() {
  const colorScheme = useColorScheme();
  return useMemo(
    () => (colorScheme === 'dark' ? DarkTheme : LightTheme),
    [colorScheme],
  );
}
