import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, SafeAreaView, Pressable, Button, Image } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackScreenProps } from '../types';
import { getCurrentUser} from '../components/makeAccount';

let postSong:string
let postArtist:string
let postPhoto:string
let userPost: JSX.Element
let saved :boolean  = false
export default function PostScreen({ navigation }: RootStackScreenProps<'Post'>) {
    const [song, setSong] = useState('song')
    let test = new Post('postSong', "postArtist", "postPhoto")


    if (saved == false){
      return (
        <View style={styles.container}>
          <TextInput 
          style={styles.input}
          placeholder='Enter a Song' 
          onChangeText={(val) => {
            setSong(val)
            postSong = val
          }
          }/>
          <TextInput 
          style={styles.input}
          placeholder='Enter the Artist' 
          onChangeText={(val) => {
            setSong(val)
            postSong = val
          }
          }/>
          <TextInput 
          style={styles.input}
          placeholder='Enter a Photo' 
          onChangeText={(val) => {
            postSong = val
          }
          }/>
          

          <Text style={styles.newText}> The song you will post is: {song}</Text>

          <Button
              title='Post Song'
              onPress={() =>{
                
                test = new Post(postSong, postArtist, postPhoto)
                saved = true
                userPost = test.card()
                navigation.replace('Post')
              }} />

        </View>
      )
    }
    else{
      return (
        <View style={styles.container}>
          <TextInput 
          style={styles.input}
          placeholder='Enter a Song' 
          onChangeText={(val) => {
            setSong(val)
            postSong = val
          }
          }/>
          <TextInput 
          style={styles.input}
          placeholder='Enter the Artist' 
          onChangeText={(val) => {
            setSong(val)
            postArtist = val
          }
          }/>
          <TextInput 
          style={styles.input}
          placeholder='Enter a Photo' 
          onChangeText={(val) => {
            setSong(val)
            postPhoto = val
          }
          }/>
          

          <Text style={styles.newText}> The song you will post is: {song}</Text>

          <Button
              title='Post Song'
              onPress={() =>{
                saved = true
              }} />
              {test.card()}
        </View>
      )
    }
       
        
      };

      
class Post{
  songName:string
  artist:string
  picture:string
  constructor(songName:string, artist: string,  picture: string){
    this.songName = songName
    this.artist = artist
    this.picture = picture
    
  }

  card(){
    return(
      <View style = {styles.songBase}>
        <View style = {styles.songData}>
          <Text style = {styles.songPoster}> Posted by : {getCurrentUser()}</Text>
          <Text style = {styles.songInfo}>Song : {this.songName}</Text>
          <Text style = {styles.songInfo}>Artist: {this.artist}</Text>
        </View>
        <View style = {styles.songPhoto}>
          <Image source={require('../assets/images/icon.png')} style = {styles.songPhoto}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(204, 197, 244)',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(41, 41, 95)',
    padding: 8,
    margin: 10,
    width: 200,
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  newText: {
    fontSize: 12,
    color:'black',
  },
  songBase:{
    width: '80%',
    height: 200,
    borderColor : "rgb(41, 41, 95 )",
    borderWidth: 10,
    borderRadius: 45,
    flexDirection: 'column',
    backgroundColor: "#111"
  },
  songData:{
    flex: 1,
    borderColor : 'white',
    borderRadius: 45,
    width: "95%",
    alignSelf: 'center',
    backgroundColor:"#111",
  },
  songPhoto:{
    flex:2,
    aspectRatio: 1,
    borderColor : 'rgb(204, 197, 244 )',
    borderWidth: 5,
    alignSelf: 'center',

  },
  songInfo:{
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'auto',
    color: 'rgb(204, 197, 244 )',
  },
  songPoster:{
    fontSize: 10,
    alignSelf: 'flex-end',
    color: 'rgb(204, 197, 244 )',
    marginRight: 20
  }
});
