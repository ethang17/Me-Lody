import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, SafeAreaView, Pressable, Button } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackScreenProps } from '../types';
import { setSongArtist ,setSongName } from '../components/entries';


export default function PostScreen({ navigation }: RootStackScreenProps<'Post'>) {
    const [song, setSong] = useState('song')
    const [artist, setArtist] = useState('artist')
    const saveSong = () =>{
      /*functions imported from entries.js, sets the varibale within that file to the desired song and artist*/
      /*Notice setSongName is for the entry, setSong is for this file and the preview*/
      setSongName(song)
      setSongArtist(artist)
      navigation.navigate('Root');
    };

        return (
          <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder='Enter a Song' 
            onChangeText={(val) => setSong(val)}/>
            <TextInput 
            style={styles.input}
            placeholder='Enter the Artist' 
            onChangeText={(val) => setArtist(val)}/>

            <Text> The song you will post is: {song} by {artist}</Text>

            <Button
                title='Post Song'
                
                onPress={saveSong} />
          </View>
        );
      };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    color: 'blue',
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
});
