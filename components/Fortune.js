import React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';

export default function Fortune({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Get me out of here!" onPress={() => navigation.goBack()} />
      <Text style={styles.text}>
        DO YOU DARE? JUST HOLD THE CRSYTAL BALL AND ASK "BLACK MAGIC MIRROR
        WILL????"
      </Text>
      <View style={styles.mirror} />
      <Text></Text>
      <Pressable>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://i.pinimg.com/originals/9a/0c/59/9a0c5982cd2a9d362f6d9b1dbbc90699.png',
          }}
        />
      </Pressable>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Papyrus',
    fontSize: 15,
  },
  img: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 30 / 2,
  },
  mirror: {
    alignSelf: 'center',
    width: 250,
    height: 300,
    borderColor: 'silver',
    borderWidth: 1,
    borderStyle: 'dotted',
  },
});
