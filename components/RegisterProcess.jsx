import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import Login from './Login';
import Signup from './Signup';
let StackNavigator = createStackNavigator();
export default function RegisterProcess() {
    return (
        <StackNavigator.Navigator initialRouteName="login">
            <StackNavigator.Screen name="login" component={Login}/>
            <StackNavigator.Screen name="signup" component={Signup}/>
        </StackNavigator.Navigator>
    )
}