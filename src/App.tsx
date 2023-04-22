import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from './navigaion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export function App() {

  return (
        <GestureHandlerRootView style={styles.container}>
          <RootNavigator />
        </GestureHandlerRootView>
  );
}