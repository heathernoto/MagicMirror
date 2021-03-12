import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const positive = [
  'As I see it, yes.',
  'It is certain.',
  'It is decidedly so.',
  'Are you kidding me? Of course!',
  "YEET! (I don't actually know what that means. I'm a phone.)",
  'Booyah! Oh yeah!',
  'For sure!',
  "Let's go Daddy-O!",
];

export const neutral = [
  'Better not tell you now.',
  'Cannot predict now.',
  'Reply hazy, try again.',
  'Concentrate and ask again.',
  'Take a chill pill and ask again later.',
  'Hit me up again later.',
  'Let me think about it.',
  "Hmmm, I'll give it a lowkey maybe.",
];
export const negative = [
  "Don't count on it.",
  'You trippin?',
  'As if!',
  'Are you kidding me? Uh, no.',
  'Are you seriously asking me that?',
  'No! Big yikes!',
  'Dude, really?',
  'That idea will have you sitting in the hot seat.',
];

//to get number between 0, array length -tested
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function Answer({ route, navigation }) {
  const [prediction, setPrediction] = useState(0);
  const [score, setScore] = useState(0.5);
  const { faces } = route.params.faces;

  useEffect(() => {
    setScore(faces[0]['smilingProbability'].toFixed(2));
    setPrediction(getRandomInt(0, 8));
  });

  return (
    <View style={styles.container}>
      {score > 0.15 && score < 0.55 && (
        <Text style={styles.text}>{neutral[prediction]} </Text>
      )}
      {score > 0.55 && <Text style={styles.text}>{positive[prediction]} </Text>}
      {score < 0.15 && <Text style={styles.text}>{negative[prediction]} </Text>}
      <Button
        style={styles.button}
        title="ask another"
        onPress={() => navigation.navigate('do you dare')}
      />
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
  button: {
    paddingTop: 100,
  },
});
