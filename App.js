import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './src/components/Screen';
import Login from './src/components/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name='HomeScreen'
            component={Screen}
            options={{
              headerShown: false
            }} />
            <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}