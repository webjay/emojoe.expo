import './lib/amplify';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react-native';
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
      <Authenticator>
        <View style={styles.container}>
          <Do />
        </View>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
