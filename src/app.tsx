import './lib/amplify';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react-native';
import StackNavigator from './navigation/stack';
import useNavigationTheme from './hooks/useNavigationTheme';
import linking from './navigation/linking';

function App() {
  const navigationTheme = useNavigationTheme();
  return (
    <Authenticator.Provider>
      <PaperProvider>
        <NavigationContainer linking={linking} theme={navigationTheme}>
          <StatusBar />
          <ThemeProvider colorMode="system">
            <Authenticator>
              <StackNavigator />
            </Authenticator>
          </ThemeProvider>
        </NavigationContainer>
      </PaperProvider>
    </Authenticator.Provider>
  );
}

export default App;
