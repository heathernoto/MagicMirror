import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const positive = [
  'As I see it, yes.',
  'It is certain.',
  'It is decidedly so.',
  'Are you kidding me? Of course!',
  "YEET! (I don't actually know what that means. I'm a phone.)",
  'Booyah! Oh yeah!',
  'For sure!',
  "Let's go Daddy-O!",
  'Heck, yeah!',
  'Everyone thinks so!',
  'Signs point to yes.',
  'Obviously.',
  'No doubt.',
  'Go for it!',
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
  "I'm not sure about this.",
  "It's six in one, half dozen in the other",
  'Ask again later.',
  'Well, maybe.',
  'Possibily',
  'You really know the answer to this...',
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
  'I think you should rethink that idea...',
  'Nope.',
  'My sources say no.',
  'In your dreams.',
  "Odds aren't good.",
  'Stars say no.',
];
//text if working
const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

//to get number between 0, array length
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function Answer({ route, navigation }) {
  const [prediction, setPrediction] = useState(0);
  const [score, setScore] = useState(0.5);
  const { faces } = route.params.faces;

  //need to put error handler to catch when no face in screen
  useEffect(() => {
    faces !== undefined
      ? setScore(faces[0]['smilingProbability'].toFixed(2))
      : setScore(0.25);
    setPrediction(getRandomInt(0, 14));
  });

  return (
    <View style={styles.container}>
      {score > 0.15 && score < 0.55 && (
        <Animatable.Text animation={fadeIn} duration={1500} style={styles.text}>
          {neutral[prediction]}{' '}
        </Animatable.Text>
      )}
      {score > 0.55 && (
        <Animatable.Text animation={fadeIn} duration={1500} style={styles.text}>
          {positive[prediction]}{' '}
        </Animatable.Text>
      )}
      {score < 0.15 && (
        <Animatable.Text animation={fadeIn} duration={1500} style={styles.text}>
          {negative[prediction]}{' '}
        </Animatable.Text>
      )}
      <Button
        style={styles.button}
        title="ask another"
        onPress={() => navigation.navigate('???')}
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
