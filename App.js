/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';

import TabNav from "./components/TabNav";

import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (  
    <SafeAreaProvider>
      <TabNav></TabNav>  
        </SafeAreaProvider>
    
  );
};

export default App;
