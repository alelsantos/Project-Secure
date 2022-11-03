import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import InsureDate from '../pages/InsureDate';
import RedefinePassword from '../pages/RedefinePassword';
import CreateAccount from'../pages/CreateAccount';


const Stack = createNativeStackNavigator();

export default function Routes() {

    return (


        <Stack.Navigator>
            <Stack.Screen
                name="Login with"
                component={Welcome}
                options={{ headerShown: false }}


            />
            <Stack.Screen style={styles.menu}
                name="SignIn"
                component={SignIn}

            />

            <Stack.Screen style={styles.menu}
                name="RedefinePassword"
                component={RedefinePassword}

            />


            <Stack.Screen style={styles.menu}
                name="InsureDate"
                component={InsureDate}
            />

            <Stack.Screen style={styles.menu}
                name="CreateAccount"
                component={CreateAccount}
            />
        </Stack.Navigator>



    )

};


const styles = StyleSheet.create({

    container: {

    },






})