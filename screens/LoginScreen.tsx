import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native';
import { useColorScheme, Image } from 'react-native';
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

      <Text style={styles.title}>Login</Text>
      <View style={styles.separator}/>


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
    backgroundColor:"#111"
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color:"rgb(204, 197, 244 )"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: 'white',
  },
  textInputStyle: {
    height: 40,
    width: 200,
    borderColor: 'rgb(204, 197, 244 )',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5,
    textAlign: 'center',
    color:"rgb(204, 197, 244 )",
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: "rgb(41, 41, 95 )",
    borderColor: "rgb(204, 197, 244 )",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    color: "rgb(204, 197, 244 )",
    fontWeight: "bold",
    margin: 5,
  },
  blankSpace:{
    height: 50
  }



});
