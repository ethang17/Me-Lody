import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { LoginKey, checkPass } from '../components/Register';
import { Text, View } from '../components/Themed';

let first, last, user, email, pass, confirm

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.section}>FIRST NAME:</Text>
            <TextInput style={styles.input}
                placeholder='John'
                onChangeText={}
            />
            <Text style={styles.section}>LAST NAME:</Text>
            <TextInput style={styles.input}
                placeholder='Smith'
            />
            <Text style={styles.section}>EMAIL:</Text>
            <TextInput style={styles.input}
                placeholder='e.g. johnsmith@gmail.com'
            />
            <Text style={styles.section}>PASSWORD:</Text>
            <TextInput style={styles.input}
                placeholder=''
            />
            <Text style={styles.section}>CONFIRM PASSWORD:</Text>
            <TextInput style={styles.input}
                placeholder=''
            />



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
    }
});
