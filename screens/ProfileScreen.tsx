import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { Alert, Pressable } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import changeName, { showName } from '../components/input';
import { Text, View } from '../components/Themed';
import setName from '../components/input'
import { RootStackScreenProps } from '../types';

export default function ProfileScreen({ navigation }: RootStackScreenProps<'Profile'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>This is your profile</Text>
    <TextInput
      onChangeText={(val) => setName(val)}
      placeholder  = 'e.g NAME'
    />
   <Pressable onPress={() => navigation.replace('Profile')}><Text>Press Me To Save What You Entered</Text></Pressable>
    <Text>
      {showName()}
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
});
