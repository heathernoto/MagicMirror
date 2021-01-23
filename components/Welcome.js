import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//entry page
export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> LOOK DEEP DEEP...</Text>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://i.pinimg.com/originals/9a/0c/59/9a0c5982cd2a9d362f6d9b1dbbc90699.png',
        }}
      />

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
  tiny: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Papyrus',
    fontSize: 8,
  },
  img: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderRadius: 200 / 2,
  },
});
