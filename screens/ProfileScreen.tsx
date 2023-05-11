import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { checkLogin } from '../components/makeAccount';
import { getCurrentUser, getCurrentEmail, getCurrentFirsrt } from '../components/makeAccount';
import { Text, View } from '../components/Themed';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';

let myPost: JSX.Element = <View><Text>Not Made</Text></View>
export function setPost(post:JSX.Element){
  myPost = post
}
export default function ProfileScreen() {
  const [image, setImage] = useState('https://wallpapers.com/images/high/blank-default-pfp-wue0zko1dfxs9z2c.webp');
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button title="Pick an image to upload as your profile picture" onPress={pickImage} />
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Text style={styles.infoText}>This is your profile</Text><Text style={styles.infoText}>User: {getCurrentUser()}</Text>
    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> 

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {myPost}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(204, 197, 244)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95)',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  infoText:{
    fontSize: 16,
    color: 'rgb(41, 41, 95)'
  },
});
