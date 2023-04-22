import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { theme } from '../theme';
import { AppNavigator } from './app.navigation';
import { AuthNavigator } from './auth.navigation';

export function RootNavigator() {
  const user = null;
  const scheme = useColorScheme();

  return (
    <NavigationContainer>
     <AuthNavigator />
    </NavigationContainer>
  );
}