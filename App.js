import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Fortune from './components/Fortune';

const Stack = createStackNavigator();
//entry page
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="enter if you dare">
          <Stack.Screen name="enter if you dare" component={Welcome} />
          <Stack.Screen
            name="Fortune"
            component={Fortune}
            options={{ title: 'ask about your future' }}
          />
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
  // tiny: {
  //   color: 'white',
  //   textAlign: 'center',
  //   fontFamily: 'Papyrus',
  //   fontSize: 8,
  // },
  // img: {
  //   alignSelf: 'center',
  //   width: 300,
  //   height: 300,
  //   borderRadius: 200 / 2,
  // },
});
