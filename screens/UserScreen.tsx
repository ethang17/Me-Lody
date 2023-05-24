import { ScrollView, Text, View, Pressable } from "react-native";
import Navigation from "../navigation";
import { RootStackScreenProps } from "../types";
import { StyleSheet, Image } from "react-native";

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
            <View style = {styles.body}>
                <Text style ={styles.header}>Getting Started:</Text>
                <Text>    Set up of the app is easy. Simply opne the application as you would any other app and go from there.
                   Upon start up, you will be asked to login. If you have a preexisitng acccount, use that to login.
                    If not, go through with the process of creating an account.</Text>
                <Text style = {styles.header}>Registering for an Account</Text>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    In order to create an account, you must click the 'I Do Not Have an Account' button(4) in order to go to the registration page. This is where you will be able to create your new account. Be prepared with your legal name, username, email, and password.</Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7602.jpg')} style = {styles.picture}/>
                </View>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    Now that you are on your desired page, input your date into the tex inputs. In (1) input your First name. In (2) input your Last name. In (3) input your seried username. Be sure to remember your username, it will be required to log in. In (4) type in your email. In (5) type your password. In (6) retpye your password. Your account cannot be created if your passwords do not match. Aftre completeing your information, save your login using button (7). Press button (8) to sing into your account.</Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7603.jpg')} style = {styles.picture}/>
                </View>
                <Text style = {styles.header}>Logging in:</Text>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    In order to sign in to your account. Use the username you inputted while creatting your account in (1). Then, input the password you used during your account creation in (2). Press the submit button, (3) in order to continue to the app.</Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7602.jpg')} style = {styles.picture}/>
                </View>
                <Text style = {styles.header}>Posting a Song:</Text>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    Create your first post by first navigating to the posting screen. Do this by pressing (1) on the home page.</Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7605.jpg')} style = {styles.picture}/>
                </View>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    To create your first song post, begin by deciding on the song you woudl like to use. Now, input the name of the song into (1). Input the artist of the song to (2). Then, create a link to a picture of the album art. Input this link into (3). Once you are happy wiht the information provided, click (4). You will then be redirected to the home page and see your post. </Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7608.jpg')} style = {styles.picture}/>
                </View>
                <Text style = {styles.header}>Adding Friends:</Text>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    You can use the navigation bar on the bottom in order to navigate between the home page and the friends page. Use (3) in order to naviagte to the friends page. Use (2) in order to navigate back to the home page.</Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7605.jpg')} style = {styles.picture}/>
                </View>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    (1) represents the list of people who are your friends. This will be blank upon the creation of your account. In (2) you will see people who are suggetsed to be added. In order to add these friends to your friends list, first tap (3). This will begin the process of adding the friend. Then, press (4), this will complete the process and the friend will be added to your friends list. Now, when redirecting to the home page, you will see the posts of these now added friends. </Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7607.jpg')} style = {styles.picture}/>
                </View>
                <Text style = {styles.header}>The Settings Tab:</Text>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    You can access the settings menu through the main page of the app by clicking the cog icon. From there you will be given severeal options. The first of which is to view your profile (1). This will allow you to customize your profile and view your previously posted post. The second button allows you to view our privacy policy (2). The third button brings you to the user manual (3) and the fourht button brings you to a systems manual(4).</Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/settings.jpg')} style = {styles.picture}/>
                </View>
                <Text style = {styles.header}>The Profile Screen:</Text>
                <View style = {styles.textAndPhoto}>
                  <Text style = {{width: '60%'}}>    From the profile screen, you can change your profile picture using (1). Tis will bring up your camera roll and then once you select a photo you will be able to crop it to fit the box and when you press done your new profil picture will be showing.</Text>
                  <Image source={require('../assets/images/APPPHOTOS-USER/IMG_7613.jpg')} style = {styles.picture}/>
                </View>
            </View>
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
    picture:{
      width: '40%',
      aspectRatio:9/19.5,
      borderWidth: 3,
      borderColor: 'rgb(41, 41, 95 )',
      marginBottom: 5,
    },
    body:{
      marginTop: 20,
      width: '90%',

    },
    header:{
      textAlign: 'left',
      color: 'rgb(41, 41, 95 )',
      fontWeight: 'bold',
      marginVertical: 20,
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
      marginTop:20,
    },
    textAndPhoto:{
      flexDirection: 'row',

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
  
  