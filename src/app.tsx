import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import Authenticator from './components/Authenticator';
import Init from './components/Init';
import OnBoard from './components/OnBoard';
import StackNavigator from './navigation/stack';
import useNavigationTheme from './hooks/useNavigationTheme';
import linking from './navigation/linking';
import Sentry from './lib/sentry';

function App() {
  const navigationTheme = useNavigationTheme();
  return (
    <PaperProvider>
      <Authenticator>
        <NavigationContainer linking={linking} theme={navigationTheme}>
          <StatusBar />
          <StackNavigator />
          <Init />
          <OnBoard />
        </NavigationContainer>
      </Authenticator>
    </PaperProvider>
  );
}

export default Sentry.wrap(App);
