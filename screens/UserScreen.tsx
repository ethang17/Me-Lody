import { ScrollView, Text, View, Pressable } from "react-native";
import Navigation from "../navigation";
import { RootStackScreenProps } from "../types";
import { StyleSheet } from "react-native";

export default function UserScreen({ navigation }: RootStackScreenProps<'User'>) {
    return (
        <ScrollView>
            <View style = {styles.container}>
                <Pressable style = {styles.button} onPress={() => {
                    navigation.replace('Root')
                }}>

                    <Text style = {styles.buttonText}>Home</Text>
                </Pressable>
            <Text style = {styles.title}>User Manual</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      minHeight: 750,
      backgroundColor: 'rgb(204, 197, 244 )',
  
    },
    postHolder:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(204, 197, 244 )'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'rgb(41, 41, 95 )',
      marginTop:100,
    },
    otherText:{
      fontSize: 12,
      fontWeight: 'bold',
      color: 'rgb(41, 41, 95 )'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
      alignSelf: 'center',
      backgroundColor:"rgb(41, 41, 95 )"
  },
    link: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
      color: 'blue',
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
        alignSelf: "flex-start"
      },
      buttonText: {
        color: "rgb(204, 197, 244 )",
        fontWeight: "bold",
        margin: 5,
      },
  });
  
  