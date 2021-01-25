import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
//import { RNCamera, FaceDetector } from 'react-native-camera';
import * as FaceDetector from 'expo-face-detector';

export default function Fortune({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [faces, setFaces] = useState([]);
  const [startCamera, setStartCamera] = useState(false);

  async function faceDetected({ faces }) {
    const faceData = await FaceDetector.detectFacesAsync();
    setFaces(faces);
    console.log(faceData, faces);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No access to camera</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        HOLD THE CRYSTAL BALL AND ASK THE MAGIC BLACK MIRROR...
      </Text>
      <Image
        style={styles.mirror}
        source={{
          uri:
            'https://i.pinimg.com/originals/f1/54/18/f15418afa2348ad80b882dde6a5e3a91.png',
        }}
      />
      <Camera
        type={Camera.Constants.Type.back}
        onFacesDetected={faceDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.none,
          runClassifications: FaceDetector.Constants.Classifications.all, //to get smile must usw all
          minDetectionInterval: 100,
          tracking: true,
        }}
      />

      <Pressable
        onPressOut={() => navigation.navigate('the future', { faces })}>
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
    // borderColor: 'silver',
    // borderWidth: 1,
    // borderStyle: 'dotted',
    opacity: 0.07,
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
