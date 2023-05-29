import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, SafeAreaView, Pressable, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackScreenProps } from '../types';
import { getCurrentUser} from '../components/makeAccount';
import { setPost } from './ProfileScreen';

let postSong:string
let postArtist:string
let postPhoto:string
let userPost: JSX.Element
let saved :boolean  = false
export function getSaved(){
  return saved
}
export function setSaved(bool:boolean = false){
  saved = bool
}

export function getUserPost(){
  return userPost
}
export default function PostScreen({ navigation }: RootStackScreenProps<'Post'>) {
    const [song, setSong] = useState('song')
    let test = new Post('postSong', "postArtist", "postPhoto")
      return (
        <View style={styles.container}>
          <TextInput 
          style={styles.input}
          placeholder='Enter a Song' 
          placeholderTextColor="rgb(41, 41, 95 )"
          onChangeText={(val) => {
            setSong(val)
            postSong = val
          }
          }/>
          <TextInput 
          style={styles.input}
          placeholder='Enter the Artist' 
          placeholderTextColor="rgb(41, 41, 95 )"
          onChangeText={(val) => {
            setSong(val)
            postArtist = val
          }
          }/>
          <TextInput 
          style={styles.input}
          placeholder='Enter a Photo' 
          placeholderTextColor="rgb(41, 41, 95 )"
          onChangeText={(val) => {
            postPhoto = val
          }
          }/>
          

          <Text style={styles.newText}> The song you will post is: {song}</Text>

          <TouchableOpacity style = {styles.button}

              onPress={() =>{
                
                test = new Post(postSong, postArtist, postPhoto)
                saved = true
                userPost = test.card()
                navigation.replace('Root')
                setPost(test.card())
              }} >
                <Text style = {styles.buttonText}>Post Song</Text>
                </TouchableOpacity>

        </View>
      )
    }
;

      
export class Post{
  songName:string
  artist:string
  picture:string
  poster: string
  constructor(songName:string, artist: string,  picture: string, poster: string = ''){
    this.songName = songName
    this.artist = artist
    this.picture = picture
    this.poster = poster
    if (poster == ''){
      this.poster = getCurrentUser()
    }
  }

  card(){
    console.log("Song Name: ", this.songName)
    console.log("Song Artist: ", this.artist)
    console.log("Song Photo: ", this.picture)
    
    return(
      <View style = {styles.songBase}>
        <View style = {styles.songData}>
          <Text style = {styles.songPoster}> Posted by : {this.poster}</Text>
          <Text style = {styles.songInfo}>Song : {this.songName}</Text>
          <Text style = {styles.songInfo}>Artist: {this.artist}</Text>
        </View>
        <View style = {styles.songPhoto}>
          <Image source={{uri: this.picture}} style = {styles.songPhoto}/>
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
    height: 40,
    width: "80%",
    alignSelf:"center",
    borderColor: 'rgb(41, 41, 95 )',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5,
    textAlign: 'center',
    color:"rgb(41, 41, 95 )",
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
    backgroundColor: "#111",
    marginVertical: 5,
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
