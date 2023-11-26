import React from 'react';
import {SafeAreaView} from 'react-native';
import {NetworkContextProvider} from './src/context/useNetworkContext';
import Home from './src/screens/Home';

function App() {
  return (
    <NetworkContextProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </NetworkContextProvider>
  );
}

export default App;
