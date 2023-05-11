import { StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { getKeys } from '../components/makeAccount';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useRoute } from '@react-navigation/native';
import { getUserPost, getSaved } from './PostScreen';


/* Turn to true during testing if you want to not have to login*/
let signedIn = false
export function setSignedIn(bool: boolean){
  signedIn = bool
}
let posts: JSX.Element[] = []
export function addPost(card: JSX.Element){
  let index = posts.length
  posts[index] = card
}
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const route = useRoute();
  posts[0] = (
    <View style = {styles.postHolder}>
        <Text style={styles.otherText}>Here is where you will find your friends' posts for the day</Text>
    </View>
  )
  if (getSaved() == true){
    posts[0] = getUserPost()
  }
  if (signedIn == true) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Me-Lody</Text>
        <View style={styles.separator} />
        {posts}
        <View style={styles.separator}/>
      <Pressable onPress={() => navigation.replace('Post')} 
      style={styles.link}> 
      <Text style={styles.otherText}> Click me to post a song!</Text></Pressable>
      </View>
      </ScrollView>
    );
  }
  else {

    navigation.replace('Login')
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 750,
    backgroundColor: 'rgb(204, 197, 244 )',

  },
  postHolder:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(204, 197, 244 )'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95 )',
    marginTop:100,
  },
  otherText:{
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95 )'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    alignSelf: 'center',
    backgroundColor:"rgb(41, 41, 95 )"
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

