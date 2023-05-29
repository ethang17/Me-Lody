import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { RootStackScreenProps } from "../types";
import { setCurrentUser } from "../components/makeAccount";


export default function ChangeUser({ navigation }: RootStackScreenProps<'ChangeUser'>) {
    let newString:string
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Input New User Name</Text>
        <TextInput style={styles.textInputStyle}
                placeholder='e.g. jsmith'
                onChangeText={(val) => newString = val}
                placeholderTextColor="rgb(41, 41, 95 )"
            />
        <TouchableOpacity style = {styles.button} onPress={() => {
            setCurrentUser(newString)
            navigation.replace('Profile')
        }}><Text style = {styles.buttonText}>Save</Text></TouchableOpacity>
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
      fontSize: 20,
      fontWeight: 'bold',
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
    linkText: {
      fontSize: 14,
      color: '#2e78b7',
    },  button: {
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
      textInputStyle: {
        height: 40,
        width: "80%",
        alignSelf:"center",
        borderColor: 'rgb(41, 41, 95 )',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 5,
        textAlign: 'center',
        color:"rgb(41, 41, 95 )",
      },
  });
  