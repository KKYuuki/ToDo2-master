import React from 'react'
import { StyleSheet, Image, TextInput, Button, useColorScheme, View, StatusBar, Text, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { Link } from 'expo-router'


const App = () => {


    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#333333' : '#eeeeee';

    React.useEffect(() => {
        StatusBar.setBackgroundColor(backgroundColor);
    }, [backgroundColor]);

    return (
        <SafeAreaView style={[Style.page, { backgroundColor }]}>
            <StatusBar backgroundColor={backgroundColor} barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
            <Image source={require('../assets/images/react-logo.png')} style={Style.img} />
            <TextInput style={Style.input} inputMode='email' clearButtonMode='while-editing' placeholder='Username' />
            <TextInput style={Style.input} secureTextEntry={true} clearButtonMode='while-editing' placeholder="Password" />
            <Button title='Login' onPress={() => { }} />

                <View style={Style.text}>
                    <Link href="./signup" style={Style.text}>Don't have an account?</Link>
                </View>


                <Text style={Style.text}>
                    Forgot password?
                </Text>
        </SafeAreaView>
    )
}

export default App

const Style = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 16,
        color: '#808080',
        marginTop: 20
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
        height: 30,
        borderRadius: 10,
        margin: 10,
        padding: 5
    },
    button: {
        width: 200,
        height: 30,
        borderRadius: 10,
        margin: 10,
        padding: 5
    }
})
