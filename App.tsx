/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import {
  Camera,
  useCodeScanner,
  useCameraPermission,
} from 'react-native-vision-camera';

const App: React.FC = () => {
  const { hasPermission } = useCameraPermission();
  const cameras = Camera.getAvailableCameraDevices();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  if (!hasPermission) {
    return (
      <View>
        <Text>No permissions</Text>
      </View>
    );
  }
  if (cameras.length === 0) {
    return (
      <View>
        <Text>No device</Text>
      </View>
    );
  }
  return (
    <Camera
      style={{ width: '100%', height: '100%' }}
      codeScanner={codeScanner}
      device={cameras[0]}
      isActive={true}
    />
  );
};

export default App;
