import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Fortune from './components/Fortune';

const Stack = createStackNavigator();
//entry page
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName="do you dare"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Papyrus',
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="do you dare" component={Welcome} />
          <Stack.Screen name="???" component={Fortune} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Papyrus',
    fontSize: 30,
  },
});
