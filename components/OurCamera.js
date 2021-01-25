// import { Camera, PermissionStatus } from 'expo-camera';
// import 'react-native-gesture-handler';
// import React, { useState, useEffect } from 'react';
// import { Text } from 'react-native';
// import * as FaceDetector from 'expo-face-detector';
// //import { Permissions, Camera, FaceDetector, } from ‘expo’;

// export default function OurCamera() {
//   const [hasPermission, setHasPermission] = useState(null);
//   //check below
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   if (hasPermission === null) {
//     return (
//       <Camera
//         type={'front'}
//         onFacesDetected={() => {
//           faces.length && setFaces(faces);
//         }}
//         faceDetectorSettings={{
//           mode: FaceDetector.Constants.Mode.fast,
//           detectLandmarks: FaceDetector.Constants.Landmarks.none,
//           runClassifications: FaceDetector.Constants.Classifications.all, //to get smile must usw all
//           minDetectionInterval: 100,
//           tracking: true,
//         }}
//       />
//     );
//   }
// }
