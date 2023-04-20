import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TextInput, Image} from 'react-native';
import { useColorScheme } from 'react-native';
import Navigation from '../navigation';
import { RootStackScreenProps } from '../types';
import { setSignedIn } from './TabOneScreen';
import { checkLogin } from '../components/makeAccount';


export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const [text, setText] = useState('');
  const scheme = useColorScheme();
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Image source={require('../assets/images/logo-color.png')} />
      </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#f4c5cc" darkColor="rgba(41,41,95,0.1)" />

      
      <TextInput style={styles.textInputStyle}
        /*style={{ color: scheme === 'dark' ? 'white' : 'black'}}*/


        placeholderTextColor="rgb(204, 197, 244 )"
        placeholder="Enter your Username"
        maxLength={16}
        onChangeText={newText => setText(newText)}

      />
      <TextInput style={styles.textInputStyle}

        secureTextEntry={true}
        placeholderTextColor="rgb(204, 197, 244 )"
        placeholder="Enter your Password"

        onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />
      <View style={styles.blankSpace}/>
      <Pressable
        style={styles.button}
        onPress={() => {
          if (checkLogin(text, name)) {
            setSignedIn(true)
            navigation.replace('Root')
          }
        }}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </Pressable>
      <Pressable
        onPress={() => { navigation.replace('Register') }}>
        <Text style={styles.buttonText}>I Do Not Have An Account</Text>
      </Pressable>
      <Text style={{ padding: 10, fontSize: 42 }}>



      </Text>


      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(204, 197, 244 )'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color:"rgb(204, 197, 244 )"
  },
  separator: {
    marginVertical: 3,
    height: 0,
    width: '80%',
    backgroundColor: 'white',
  },
  textInputStyle: {
    height: 50,
    width: 250,
    borderColor: 'rgb(41, 41, 95)',
    borderWidth: 2,
    borderRadius: 40,
    marginVertical: 3,
  },
  submitStyle: {
    fontWeight: 'bold',
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: 'rgb(41, 41, 95)',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: 'rgb(204, 197, 244)',
    textAlign: 'center',
    fontSize: 30,
  },

  


});
