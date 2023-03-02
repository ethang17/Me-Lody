import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TextInput} from 'react-native';
export default function LoginScreen() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-In</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      

      <TextInput style={styles.textInputStyle}
        placeholderTextColor='white'
        placeholder="Enter your Username"
        onChangeText={newText => setText(newText)}
        
      /> 
      <TextInput style={styles.textInputStyle}
        placeholderTextColor='white'
        placeholder="Enter your Password"
        onChangeText={newText2 => setText(newText2)}
        
      /> 
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
    color: 'white',
    height: 40
    }

});
