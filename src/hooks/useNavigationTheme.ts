import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import { adaptNavigationTheme } from 'react-native-paper';

export default function useNavigationTheme() {
  const colorScheme = useColorScheme();
  return useMemo(() => {
    if (colorScheme === 'dark') {
      const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme });
      return DarkTheme;
    }
    const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });
    return LightTheme;
  }, [colorScheme]);
}
