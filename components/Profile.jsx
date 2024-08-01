import { View, Text,Button, SafeAreaView, StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import React,{useContext, useEffect, useRef, useState} from 'react'
import { stylesheet } from '../stylesheet'
import RegisterProcess from './RegisterProcess'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from '@react-navigation/native'
import { DarkThemeContext } from '../providers/DarkThemeProvider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
export default function Profile() {
    let navigation = useNavigation();
    let [user,setUser] = useState(null);
    let themeContext = useContext(DarkThemeContext);
    async function getData(){
        try {
            const value = await AsyncStorage.getItem('isLoggedIn');
            setUser(value);
        } catch(e) {
            console.log(e);
        }
    }
    useEffect(()=>{
        getData();
    })
    return (
        <>
            {
                user?(
                    <Text>OOPS you are not logged in</Text>
                ):(
                    <RegisterProcess/>
                )
            }
        </>
    )
}