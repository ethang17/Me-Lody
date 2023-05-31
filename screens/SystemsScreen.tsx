import { ScrollView, Text, View, Pressable } from "react-native";
import Navigation from "../navigation";
import { RootStackScreenProps } from "../types";
import { StyleSheet } from "react-native";

export default function SystemsScreen({ navigation }: RootStackScreenProps<'System'>) {
    return (
        <ScrollView>
            <View style = {styles.container}>
                <Pressable style = {styles.button} onPress={() => {
                    navigation.replace('Root')
                }}>

                    <Text style = {styles.buttonText}>Home</Text>
                </Pressable>
            <Text style = {styles.title}>Minimum hardware and software requirements:</Text>
            <Text style = {styles.otherText}> A cellular device (Either Iphone or Android) with the expo go app downloaded. To install this app, head to the app store or google play store, and search "Expo Go". Then download and scan the QR code for our app to open it up.</Text>
            <Text style = {styles.title}>Error Messages and Troubleshooting:</Text>
            <Text style = {styles.otherText}>There should not be any error messages within the app. If one occurs, it is most likely involving the navigation. This can be found in the navigation tab. index.tsx and LinkingConfiguration.tsx link our screens together. If an error with this occurs, make sure each screen is linked to its correct location</Text>
            <Text style = {styles.title}>Contact information:</Text>
            <Text style = {styles.otherText}>edg45@drexel.edu | jnm323@drexel.edu | as5752@drexel.edu | jkn32@drexel.edu </Text>
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
  
  