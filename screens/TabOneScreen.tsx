import { StyleSheet, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { getKeys } from '../components/makeAccount';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useRoute } from '@react-navigation/native';


let signedIn = true
export function setSignedIn(bool: boolean){
  signedIn = bool
}
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
const route = useRoute();

  if (signedIn == true) {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>Me-Lody</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.otherText}>Here is where you will find your friends' posts for the day</Text>
        <View style={styles.separator} lightColor='#eee' darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={() => navigation.replace('Post')} 
      style={styles.link}> 
      <Text style={styles.otherText}> Click me to post a song!</Text></Pressable>
      <Image source={require('../assets/images/blond.png')} />
      </View>
    );
  }
  else {
    <View style={styles.container}>
    <Text style={styles.title}>Me-Lody</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Text>Here is where you will find your friends' posts for the day</Text>

  </View>
    navigation.replace('Login')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(204, 197, 244 )'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95 )'
  },
  otherText:{
    fontsize: 12,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95 )'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    color: 'blue',
  }
});
