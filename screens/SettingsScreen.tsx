import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function SettingsScreen({ navigation }: RootStackScreenProps<'Settings'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Settings tab will be right here</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Pressable onPress={() => navigation.replace('Profile')}>
        <View style = {styles.blockButton} >
          <Text style = {styles.buttonLabel}>
            User Profile
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.replace('Privacy')}>
        <View style = {styles.blockButton} >
          <Text style = {styles.buttonLabel}>
            Privacy Terms
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
  blockButton: {
    height: 50,
    width: 100,
    backgroundColor: '#DDD',
    alignItems: 'center',
    paddingVertical: 12,
    margin: 2
  },
  buttonLabel:{
    fontSize: 15,
    fontWeight: 'bold',

  }
});
