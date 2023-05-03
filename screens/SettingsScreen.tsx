import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function SettingsScreen({ navigation }: RootStackScreenProps<'Settings'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.infoText}>This is where your settings tab will be</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Pressable onPress={() => navigation.replace('Profile')}>
        <View style = {styles.blockButton} >
          <Text style = {styles.buttonLabel}>
            Profile
          </Text>
        </View>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(204, 197, 244)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95)'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  blockButton: {
    height: 50,
    width: 100,
    backgroundColor: 'rgb(41, 41, 95)',
    alignItems: 'center',
    paddingVertical: 12,
    margin: 2
  },
  buttonLabel:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoText:{
    fontSize: 16,
    color: 'rgb(41, 41, 95)'
  },
});
