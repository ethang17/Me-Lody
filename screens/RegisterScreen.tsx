import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { makeAccount, checkLogin} from '../components/makeAccount';


let first: string, last: string, user: string, email: string, pass: string, confirm: string
let saved = ''
export default function RegisterScreen({ navigation }: RootStackScreenProps<'Register'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.section}>FIRST NAME:</Text>
            <TextInput style={styles.textInputStyle}
                placeholder='e.g. John'
                placeholderTextColor="rgb(41, 41, 95 )"
                onChangeText={(val) => first = val}
            />
            <Text style={styles.section}>LAST NAME:</Text>
            <TextInput style={styles.textInputStyle}
                placeholder='e.g. Smith'
                placeholderTextColor="rgb(41, 41, 95 )"
                onChangeText={(val) => last = val}
            />
            <Text style={styles.section}>USER:</Text>
            <TextInput style={styles.textInputStyle}
                placeholder='e.g. jsmith'
                onChangeText={(val) => user = val}
                placeholderTextColor="rgb(41, 41, 95 )"
            />
            <Text style={styles.section}>EMAIL:</Text>
            <TextInput style={styles.textInputStyle}
                placeholder='e.g. johnsmith@gmail.com'
                onChangeText={(val) => email = val}
                placeholderTextColor="rgb(41, 41, 95 )"
            />
            <Text style={styles.section}>PASSWORD:</Text>
            <TextInput style={styles.textInputStyle}
                placeholder='e.g. PASS'
                placeholderTextColor="rgb(41, 41, 95 )"
                onChangeText={(val) => pass = val}
            />
            <Text style={styles.section}>CONFIRM PASSWORD:</Text>
            <TextInput style={styles.textInputStyle}
                placeholder='e.g. PASS'
                placeholderTextColor="rgb(41, 41, 95 )"
                onChangeText={(val) => confirm = val}
            />
            <Pressable onPress={() => {
                if (checkPass(pass, confirm)) {
                    saved = 'SAVED DATA';
                    makeAccount(first, last, user, email, pass)
                    navigation.replace('Register')
                }else{
                    saved = 'ERROR PASSWORDS DID NOT MATCH'
                    navigation.replace('Register')
                }
            }
            }>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => {
                saved = ''
                navigation.replace('Root')
                }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText} >GO TO LOGIN</Text>
                </View>
            </Pressable>


            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

        </View>
    );
}

export function checkPass(pass:string, confirm:string){
    let works = false
    if (pass==confirm && pass!=undefined){
        works = true
    }
    return works
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:"#111"
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color:"rgb(204, 197, 244 )"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
        alignSelf: 'center',
        backgroundColor:"white"
    },
    section: {
        marginLeft: 30,
        marginBottom: 5,
        color:"rgb(204, 197, 244 )",
    },
    textInputStyle: {
        height: 40,
        width: "80%",
        alignSelf:"center",
        borderColor: 'rgb(204, 197, 244 )',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 5,
        textAlign: 'center',
        color:"rgb(204, 197, 244 )",
      },
      buttonText: {
        color: "rgb(204, 197, 244 )",
        fontWeight: "bold",
        margin: 5,
      },
      button: {
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
});
