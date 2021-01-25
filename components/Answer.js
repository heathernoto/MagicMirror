import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const positive = [
  'As I see it, yes.',
  'It is certain.',
  'It is decidedly so.',
  'Are you kidding me? Of course!',
  "YEET! (I don't actually know what that means. I'm a phone.",
  'Booyah! Oh yeah!',
];

export const neutral = [
  'Better not tell you now.',
  'Cannot predict now.',
  'Reply hazy, try again.',
  'Concentrate and ask again.',
  'Take a chill pill and ask again later.',
  'Hit me up again later.',
];
export const negative = [
  "Don't count on it.",
  'You trippin? No.',
  'As if!',
  'Are you kidding me? Uh, no.',
  'Are you seriously asking me that?',
  'No! Big yikes!',
];

//to get number between 0, array length -tested
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
//let prediction = positive[getRandomInt(0, 6)];

export default function Answer({ route, navigation }) {
  const [prediction, setPrediction] = useState(0);
  const { faces } = route.params;

  useEffect(() => {
    setPrediction(getRandomInt(0, 6)); //add a field for pos, neg, neut
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{positive[prediction]} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Papyrus',
    fontSize: 30,
  },
});
