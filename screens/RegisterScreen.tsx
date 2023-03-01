import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, TextInput } from 'react-native';
import { LoginKey, checkPass, makeAccount } from '../components/Register';
import { Text, View } from '../components/Themed';

let first:string, last:string, user:string, email:string, pass:string, confirm: string

export default function RegisterScreen() {
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
            <Pressable onPress={()=>makeAccount(first, last, user, email, pass, confirm)}>
                <View style = {styles.blockButton}>
                    <Text>SAVE</Text>
                </View>
            </Pressable>


            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
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
        margin: 2
      },
});
