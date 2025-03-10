import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Button, useColorScheme, View, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const SignUp = () => {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#333333' : '#eeeeee';
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    React.useEffect(() => {
        StatusBar.setBackgroundColor(backgroundColor);
    }, [backgroundColor]);

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Handle signup logic here
        alert('Account Created Successfully!');
    };

    return (
        <SafeAreaView style={[styles.page, { backgroundColor }]}> 
            <StatusBar backgroundColor={backgroundColor} barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
            <Image source={require('../assets/images/react-logo.png')} style={styles.img} />
            <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder='Username' />
            <TextInput style={styles.input} value={email} onChangeText={setEmail} inputMode='email' placeholder='Email' />
            <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder='Password' />
            <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} placeholder='Confirm Password' />
            <Button title='Sign Up' onPress={handleSignUp} />
            <View style={styles.text}>
                <Text>Already have an account? </Text>
                <Link href="" style={styles.link}>Login</Link>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#808080',
        marginTop: 20,
        flexDirection: 'row',
    },
    link: {
        color: '#1E90FF',
        fontWeight: 'bold',
    },
    img: {
        width: 100,
        height: 100
    },
    input: {
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'grey',
        color: 'white',
        width: 200,
        height: 40,
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 10
    }
});
