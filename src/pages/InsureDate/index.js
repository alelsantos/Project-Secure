import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Input, Button, LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import * as Animatable from 'react-native-animatable';


export default function InsureDate() {
    const [genero, setGenero] = useState("");
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={800} style={styles.container.Header}>
                {/*-Authentication Default*/}
                <Text sytle={{ marginLeft: 19 }}>    Full name *</Text>
                <View id="default" style={styles.inputArea}>

                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="Ex: John Miller" />
                    </TouchableOpacity>
                </View>

                <Text sytle={{ marginLeft: 19 }}>    Real ID *</Text>
                <View id="default" style={styles.inputArea}>

                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="Ex: 123 456 789" />
                    </TouchableOpacity>
                </View>
                <Text sytle={{ marginLeft: 19 }}>    Phone *</Text>
                <View id="default" style={styles.inputArea}>

                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="Ex: +1 (000) 000 0000" />
                    </TouchableOpacity>
                </View>

                <View id="default" style={styles.inputArea}>
                    <Text sytle={{ marginLeft: 19 }}>    Birth date: *</Text>


                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="MM/DD/YYYY" />

                    </TouchableOpacity>

                </View>

                <View style={styles.container} id="default" >
                    <Text>Sex *</Text>

                    <View style={styles.wrapper}>
                        {['Masculine', 'Famale','Other'].map(grindr => (
                            <View key={grindr} style={styles.Genero}>
                                <Text style={styles.grindr}>{grindr}</Text>
                                <TouchableOpacity
                                    style={styles.sex}
                                    onPress={() => setGenero(grindr)}>
                                    {genero === grindr && <View style={styles.inner} />}
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>

            </Animatable.View>



            <TouchableOpacity
                style={styles.Loginbutton}
                onPress={() => navigation.navigate('InsureDate')}>
                <Text style={styles.buttonLogin}>SEND</Text>
            </TouchableOpacity>





        </View>
    );
}


const styles = StyleSheet.create({


    container: {

        maxheight: 50,
        marginTop: 1.5,
        borderColor: '  #D9D9D9',
        backgroundColor: 'white'


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


    buttonDefault: {
        borderWidth: 1,
        width: '85%',
        marginLeft: 5,
        height: 50,
        backgroundColor: '#FFFFFF',
        padding: 7,
        fontSize: 18,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,


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
        paddingBottom: 14,
        marginLeft: 20



    },


    buttonLogin: {

        backgroundColor: '#0074FC',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 20,
        color: '#20232a',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 200,
        marginBottom: 4,
        strokeWidth: 123
    },

    Redefinebutton: {
        textAlign: 'center',
        color: '#0074FC'
    },

    containerForm: {
        color: '#000000'
    },

    buttonOr: {

        textAlign: 'center',
        lineHeight: 40,
        lineSize: 23,
        color: '#000000'
    },
    buttonAccount: {
        textAlign: 'center',
        color: '#0074FC',
        marginTop: 10
    },
    sex: {

        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inner: {

        width: 15,
        height: 15,
        backgroundColor: 'black',
        borderRadius: 10,

    },
    wrapper: {
        flexDirection: 'row',
        ustifyContent: 'space-evenly',
        marginTop: 10,

    },

    Genero: {
        marginHorizontal: 15,
    },

    SexGenero: {
        fontSize: 22,
        textTransform: 'capitalize'
    }

})
