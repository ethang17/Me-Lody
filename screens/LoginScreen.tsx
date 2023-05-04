import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import React, {useState} from 'react';
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

      <Image source={require('../assets/images/logo-color.png')} style = {styles.picture}/>

      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#f4c5cc" darkColor="rgba(41,41,95,0.1)" />

      
      <TextInput style={styles.textInputStyle}
      /*style={{ color: scheme === 'dark' ? 'white' : 'black'}}*/

        
        placeholderTextColor='black'
        placeholder="Enter your Username"
        maxLength={16}
        onChangeText={newText => setText(newText)}
        
      /> 
      <TextInput  
        
        secureTextEntry={true}
        style={styles.textInputStyle}
        placeholderTextColor='black'
        placeholder="Enter your Password"
        
        onSubmitEditing={(value) => setName(value.nativeEvent.text)}

        
      /> 
      <Pressable style = {styles.button}
      onPress={() => {
        if(checkLogin(text, name)){
          setSignedIn(true)
          navigation.replace('Root')
        }
      }}>
        <Text style = {styles.buttonText}>SUBMIT</Text>
      </Pressable>
      <Pressable
      onPress={() => {navigation.replace('Register')}}>
        <Text style = {styles.doNot}>I Do Not Have An Account</Text>
      </Pressable>
      <Text style={{padding: 10, fontSize: 42}}>
        
    
          
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
    backgroundColor: 'rgb(204, 197, 244 )'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "rgb(41, 41, 95)",
    marginTop: 20
  },
  separator: {
    marginVertical: 3,
    height: 0,
    width: '80%',
  },
  textInputStyle: {
    height: 40,
    width: "80%",
    alignSelf:"center",
    borderColor: 'rgb(41, 41, 95 )',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    color:"rgb(41, 41, 95 )",
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
  doNot:{
    color: "rgb(41, 41, 95 )",
    fontWeight: 'bold'
  },
  picture:{
    marginTop: 50
  }

  


});
