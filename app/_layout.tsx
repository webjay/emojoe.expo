import React from 'react';
import { ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { wrap } from '@src/lib/sentry';
import useNavigationTheme from '@src/hooks/useNavigationTheme';
import Authenticator from '@src/components/Authenticator';
import Tabs from '@src/navigation/tabs';
import Init from '@src/components/Init';
import OnBoard from '@src/components/OnBoard';

function Layout() {
  const theme = useNavigationTheme();
  return (
    <PaperProvider>
      <StatusBar />
      <Authenticator>
        <>
          <ThemeProvider value={theme}>
            <Tabs />
          </ThemeProvider>
          <Init />
          <OnBoard />
        </>
      </Authenticator>
    </PaperProvider>
  );
}

export default wrap(Layout);
