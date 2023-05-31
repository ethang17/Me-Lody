import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { checkLogin } from '../components/makeAccount';
import { getCurrentUser, getCurrentEmail, getCurrentFirst } from '../components/makeAccount';
import { Text, View } from '../components/Themed';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { RootStackScreenProps } from '../types';

let myPost: JSX.Element = <View><Text>Not Made</Text></View>
export function setPost(post:JSX.Element){
  myPost = post
}
export default function ProfileScreen({ navigation }: RootStackScreenProps<'Profile'>) {
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
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> 
      <Pressable style = {styles.button}  onPress={pickImage} >
        <Text style = {styles.buttonText}>Change Photo</Text>
      </Pressable>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Text style={styles.infoText}>Username: {getCurrentUser()}</Text>
    <Pressable style ={styles.button} onPress={() => {
      navigation.replace('ChangeUser')
    }}><Text style = {styles.buttonText}>Change Username?</Text>
    </Pressable>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text>Your Current Post</Text>
      {myPost}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(204, 197, 244)',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95)',
    marginVertical: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  infoText:{
    fontSize: 20,
    color: 'rgb(41, 41, 95)',
  },
  change:{
    color: "rgb(41, 41, 95 )",
    fontWeight: 'bold'
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: "rgb(41, 41, 95 )",
    borderColor: "rgb(204, 197, 244 )",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    alignSelf: "center"
  },
  buttonText: {
    color: "rgb(204, 197, 244 )",
    fontWeight: "bold",
    margin: 5,
  },
});
