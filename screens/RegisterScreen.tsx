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
            <TextInput style={styles.input}
                placeholder='John'
                onChangeText={(val) => first = val}
            />
            <Text style={styles.section}>LAST NAME:</Text>
            <TextInput style={styles.input}
                placeholder='Smith'
                onChangeText={(val) => last = val}
            />
            <Text style={styles.section}>USER:</Text>
            <TextInput style={styles.input}
                placeholder='jsmith'
                onChangeText={(val) => user = val}
            />
            <Text style={styles.section}>EMAIL:</Text>
            <TextInput style={styles.input}
                placeholder='e.g. johnsmith@gmail.com'
                onChangeText={(val) => email = val}
            />
            <Text style={styles.section}>PASSWORD:</Text>
            <TextInput style={styles.input}
                placeholder=''
                onChangeText={(val) => pass = val}
            />
            <Text style={styles.section}>CONFIRM PASSWORD:</Text>
            <TextInput style={styles.input}
                placeholder=''
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
                <View style={styles.blockButton}>
                    <Text>SAVE</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => {
                saved = ''
                navigation.replace('Root')
                }}>
                <View style={styles.blockButton}>
                    <Text style={styles.blockButton} >GO TO LOGIN</Text>
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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
        alignSelf: 'center',
    },
    section: {
        marginLeft: 30,
        marginBottom: 5,
    },
    input: {
        alignSelf: 'center',
        width: '80%',
        height: 25,
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 5,
    },
    blockButton: {
        height: 50,
        width: 100,
        backgroundColor: '#222',
        alignItems: 'center',
        paddingVertical: 12,
        margin: 2,
        color: 'white',
    },
});
