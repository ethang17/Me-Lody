import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, SafeAreaView, Pressable, Button } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackScreenProps } from '../types';
import { useRoute } from "@react-navigation/native"
import TabOneScreen from './TabOneScreen';
import { getCurrentUser } from '../components/makeAccount';

let song = ''
function setSong(input:string){
  song = input
}
export default function PostScreen({ navigation }: RootStackScreenProps<'Post'>) {
    
    
    const test = "songname"
    const saveSong = () =>{
        navigation.navigate('Root')
        
    }; 

        return (
          <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder='Enter a Song' 
            
            onChangeText={(val) => setSong(val)}/>

            <Button
                title='Post Song'
                mode='contained'
                onPress={saveSong} />
          </View>
        );
        
      };
export function postedSong(){
  if(song==''){
    return 'No songs posted'
  }
  else;
    return song+' Posted by ' + getCurrentUser()
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
  }
});
