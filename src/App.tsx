import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
