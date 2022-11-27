import './lib/amplify';
import React from 'react';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react-native';
import { StyleSheet, View } from 'react-native';
import Do from './components/do';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <Authenticator.Provider>
      <ThemeProvider>
        <Authenticator>
          <View style={styles.container}>
            <Do />
          </View>
        </Authenticator>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

export default App;
