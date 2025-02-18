import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Fortune from './components/Fortune';
import Answer from './components/Answer';

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
          <Stack.Screen name="the future" component={Answer} />
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
