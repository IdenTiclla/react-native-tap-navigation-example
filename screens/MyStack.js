import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Places from './Places'
import PlaceInfo from './PlaceInfo'

const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Places" component={Places} />
        <Stack.Screen name="PlaceInfo" component={PlaceInfo} />
      </Stack.Navigator>
    );
  }
  
  export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }