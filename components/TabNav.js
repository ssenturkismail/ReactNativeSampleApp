import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Calendar from "../screens/Calendar";
import ScannerScreen from "../screens/Scanner";
import ListScreen from "../screens/List";

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      activeColor="#fc5c65"
      barStyle={{ backgroundColor: '#a5b1c2' }}
      labelStyle={{ fontSize: 12 }}
      
    >
        <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={20} />
          )
          
        }}
      />
      <Tab.Screen
        name="Barcode List"
        component={ListScreen}
        options={{
          tabBarLabel: 'Barcode List',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list-outline" color={color} size={20} />
          )   
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={20} />
          )
        }}
      />
            
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
