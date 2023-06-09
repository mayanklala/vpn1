import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../constants';
import { login } from '../screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={login} name={NAVIGATION.login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}