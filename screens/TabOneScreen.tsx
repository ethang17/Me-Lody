import { StyleSheet } from 'react-native';
import { getKeys } from '../components/makeAccount';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
let signedIn = false
export function setSignedIn(bool: boolean){
  signedIn = bool
}
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  if (signedIn == true) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Me-Lody</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Here is where you will find your friends' posts for the day</Text>

      </View>
    );
  }
  else {
    <View style={styles.container}>
    <Text style={styles.title}>Me-Lody</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Text>Here is where you will find your friends' posts for the day</Text>

  </View>
    navigation.replace('Login')
  }
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
