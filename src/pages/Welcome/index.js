import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
 <Image source={require('../../assets/Logo.png')}  style={{marginLeft:16}} />
            <Text style={styles.buttonLoginWith}> Login with</Text>
            {/*-Authentication Default*/}
            <View id="default" style={styles.inputArea}>
            <Image source={require('../../assets/icon.png')}  style={{marginLeft:16}} />
                <TextInput
                    style={styles.Defaultbutton}
                 placeholder="Email"
                  
                />
                <TouchableOpacity   style={styles.buttonIconeye} onPress={ () => setHidePass(!hidePass) }>
                   
                </TouchableOpacity>
            </View>


            <View id="default" style={styles.inputArea}>
            <Image source={require('../../assets/iconlock.png')} style={{marginLeft:16}} />
                <TextInput
                    style={styles.Defaultbutton}
                    
                 placeholder="Password"
                    value={input}
                    onChangeText={ (text) => setInput(text) }
                    secureTextEntry={hidePass}
                />
                <TouchableOpacity style={styles.buttonIconeye} onPress={ () => setHidePass(!hidePass) }>
                    
                    {hidePass ?
                        <Ionicons name="eye" size={25} color="black" />
                        :
                        <Ionicons name="eye-off" size={25} color="black" />
                    }
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('RedefinePassword')}>
                <Text style={styles.Redefinebutton} >Redefine Password</Text>
            </TouchableOpacity>


            <View>
                <TouchableOpacity
                    style={styles.Loginbutton}
                    onPress={() => navigation.navigate('InsureDate')}>
                    <Text style={styles.buttonLogin}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

<View style={styles.buttonOr}>
            <Text id="or">
                <Text style={styles.buttonOr} >____________ or ____________</Text>
            </Text>
            </View>

            {/*-Authentication Apple*/}
            <View id="apple" style={styles.containerForm}>
                <TouchableOpacity style={styles.buttonSocial} id="idApple" onPress={() => navigation.navigate('SignIn')}>
                    <Image source={require('../../assets/iconApple.png')} />
                    <TextInput placeholder="  Logging with Apple" />
                </TouchableOpacity>


            </View>

            {/*-Authentication Google*/}
            <View id="google" style={styles.containerForm}>
                <TouchableOpacity style={styles.buttonSocial} id="idGoogle"
                    placeholder="Email or user" placeholderTextColor={'blue'} onPress={() => navigation.navigate('SignIn')}>
                    <Image source={require('../../assets/iconGoogle.png')} />
                    <TextInput placeholder="  Logging with Google" />
                </TouchableOpacity>
            </View>


            {/*-Authentication Facebook*/}
            <View id="face" style={styles.containerForm}>
                <TouchableOpacity style={styles.buttonSocial} id="idFace"
                    placeholder="Email or user" placeholderTextColor={'blue'} onPress={() => navigation.navigate('SignIn')}>
                    <Image source={require('../../assets/iconFacebook.png')} />
                    <TextInput placeholder="  Logging with Facebook" />
                </TouchableOpacity>
            </View>



            {/*-Authentication Twitter*/}
            <View id="face" style={styles.containerForm}>
                <TouchableOpacity style={styles.buttonSocial} id="idFace"
                    placeholderTextColor={'blue'} onPress={() => navigation.navigate('SignIn')}>
                    <Image source={require('../../assets/iconTwitter.png')} />
                    <TextInput placeholder="  Logging with Twitter" />
                </TouchableOpacity>
            </View>


            <TouchableOpacity
                style={styles.button3}
                onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.buttonAccount}>Create an account</Text>
            </TouchableOpacity>
        </View>



    );
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 350,
        maxheight: 50,
        borderColor: '  #D9D9D9'


    },

    buttonSocial: {
        Margin: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#20232a',
        textAlign: 'center',
        flexDirection: 'row',
        paddingBottom: 14

    },

    inputArea: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        marginBottom: 10,
        height: 50,
        alignItems: 'center'


    },

    Defaultbutton: {

        width: '85%',
        marginLeft: 5,
        height: 50,
        backgroundColor: '#FFFFFF',
        padding: 7,
        fontSize: 18
    },

    
    buttonIcon: {
       
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 17

    },

    buttonIconeye: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 17,
        marginLeft:-11

    },

    buttonSocial: {

        backgroundColor: '#D9D9D9',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#Gray85',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 4,
        paddingBottom: 14,
        marginLeft: 20,
        justifyContent: 'center'

    },

    buttonLogin: {


        backgroundColor: '#0074FC',
        borderColor: 'rgba(0, 0, 0, 1)',
        color: '#20232a',
        borderRadius: 70,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 20,
        
        fontWeight: "bold"
    },

    Ionicons: {

        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000'

    },

    Redefinebutton: {
        textAlign: 'center',
        fontWeight: "bold",
        color: '#0074FC'
    },

    containerForm: {
        color: '#000000'
    },

    buttonOr: {
        fontWeight: "bold",
        fontSize:25,
        flexDirection: 'row',
        textAlign: 'center',
        lineHeight: 40,
        lineSize: 23,
        color: '#000000'
       
    },


    buttonLoginWith: {
        fontWeight: "bold",
        fontSize:28,
        flexDirection: 'row',
        marginTop:10,
        textAlign: 'center',
        lineHeight: 40,
        lineSize: 23,
        color: '#000000'
    },

    buttonAccount: {
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent:'center',
        color: '#0074FC',
        marginTop: 10,
        marginLeft:45
    }

})
