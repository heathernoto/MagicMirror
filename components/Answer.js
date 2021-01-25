import React from 'react';
import { Text } from 'react-native';

export const positive = [
  'As I see it, yes.',
  'It is certain.',
  'It is decidedly so.',
  'Are you kidding me? Of course!.',
  "YEET! (I don't actually know what this MediaStreamEvent. I'm a phone.",
];

export const neutral = [
  'Better not tell you now.',
  'Cannot predict now.',
  'Reply hazy, try again.',
  'Concentrate and ask again.',
  'Take a chill pill and ask again later.',
];
export const negative = [
  "Don't count on it.",
  'You trippin? No.',
  'As if!',
  'Are you kidding me? Uh, no.',
  'Are you seriously asking me that?',
];

//to get number between 0, array length -tested
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
export default function Answer() {
  return <Text>Hello</Text>;
}
