import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function Fortune({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> IF YOU DARE...</Text>
      <Text style={styles.heading}>
        {' '}
        TOUCH MY CRYSTAL BALL AND ASK YOUR QUESTION. "BLACK MAGIC MIRROR WILL
        ______"
      </Text>
      <Text style={styles.text}> IF YOU DARE...</Text>
      <Pressable>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://i.pinimg.com/originals/9a/0c/59/9a0c5982cd2a9d362f6d9b1dbbc90699.png',
          }}
        />
      </Pressable>
      <Text style={styles.text}> ...INTO MY CRYSTAL BALL</Text>
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
  img: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
});
