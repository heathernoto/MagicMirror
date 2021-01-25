import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//entry page
export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WANT TO KNOW YOUR FUTURE?</Text>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://i.pinimg.com/originals/9a/0c/59/9a0c5982cd2a9d362f6d9b1dbbc90699.png',
        }}
      />
      <Button title="enter" onPress={() => navigation.navigate('???')} />
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
    fontSize: 22,
  },
  img: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
