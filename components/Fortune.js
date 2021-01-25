import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
//import OurCamera from './OurCamera';
import Answer from './Answer';

export default function Fortune({ navigation }) {
  const [faces, setFaces] = useState([]);
  //const [mirror, setMirror] = useState('mirror');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        HOLD THE CRYSTAL BALL AND ASK THE MAGIC BLACK MIRROR...
      </Text>
      <View style={styles.mirror}>
        <Camera
          type={'front'}
          onFacesDetected={() => {
            faces.length && setFaces(faces);
          }}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.none,
            runClassifications: FaceDetector.Constants.Classifications.all, //to get smile must usw all
            minDetectionInterval: 100,
            tracking: true,
          }}
        />
      </View>
      <Pressable
        onPressOut={() => setMirror('fortune')}
        onPressIn={() => setMirror('mirror')}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://i.pinimg.com/originals/9a/0c/59/9a0c5982cd2a9d362f6d9b1dbbc90699.png',
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Papyrus',
    fontSize: 15,
  },
  img: {
    // marginTop: 375,
    alignSelf: 'center',
    width: 140,
    height: 140,
    borderRadius: 30 / 2,
  },
  mirror: {
    alignSelf: 'center',
    width: 255,
    height: 400,
    borderColor: 'silver',
    borderWidth: 1,
    borderStyle: 'dotted',
  },
});

// {mirror === 'mirror' && (
//   <Text>
//     {/* <OurCamera /> */}
//     mirror
//   </Text>
// )}
// {mirror === 'fortune' && (
//   <Text>
//     <Answer />
//     fortune
//   </Text>
// )}
