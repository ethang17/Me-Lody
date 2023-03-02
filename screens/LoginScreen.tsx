import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TextInput} from 'react-native';
import { useColorScheme, Image } from 'react-native';

export default function LoginScreen() {
  const [text, setText] = useState('');
  const scheme = useColorScheme();
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Sign-In</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      
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
        onChangeText={newText2 => setText(newText2)}
        
      /> 
      <Text>Your password, {name} </Text> 
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
    justifyContent: 'center',
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
  textInputStyle: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5,
    
    

    }
  


});
