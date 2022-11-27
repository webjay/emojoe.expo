import './lib/amplify';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
