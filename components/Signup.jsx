import { View, Text, SafeAreaView,Image, StatusBar, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { stylesheet } from '../stylesheet'
import {Formik} from "formik"
import { useNavigation } from '@react-navigation/native'
import { TouchableNativeFeedback } from 'react-native-web'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { DarkThemeContext } from '../providers/DarkThemeProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { checkTheme } from '../App'
export default function Signup(props) {
    let navigation = useNavigation();
    
    return (
        <SafeAreaView style={{...stylesheet.mainContainer}}>
            <KeyboardAvoidingView style={{...stylesheet.mainContainer}} behavior="padding">
                <StatusBar/>
                <TouchableWithoutFeedback style={{...stylesheet.mainContainer,height:"100%"}} onPress={()=>Keyboard.dismiss()}>
                    <View style={{...stylesheet.form}}>
                        <Image source={require("../assets/logo (1).png")} style={{...stylesheet.logo}}/>
                        <Formik
                            onSubmit={(values)=>{

                            }}
                            initialValues={{name:"",email:"",password:""}}
                        >
                            {(props)=>{
                                return(
                                    <View style={{...stylesheet.form}}>
                                        <TextInput 
                                            placeholder="name" 
                                            onChangeText={props.handleChange("name")} 
                                            value={props.values.name}
                                            style={{...stylesheet.textInput}}
                                        />
                                        <TextInput 
                                            placeholder="Email" 
                                            onChangeText={props.handleChange('email')} 
                                            value={props.values.email}
                                            style={{...stylesheet.textInput}}
                                        />
                                        <TextInput 
                                            secureTextEntry 
                                            placeholder="Password" 
                                            onChangeText={props.handleChange('password')} 
                                            value={props.values.password}
                                            style={{...stylesheet.textInput}}
                                        />
                                        <TouchableOpacity onPress={()=>props.handleSubmit()} style={{...stylesheet.primaryButton}}>
                                            <AntDesign name="login" size={25} color="white" />
                                            <Text style={{color:"white",fontSize:20}}>signup</Text>
                                        </TouchableOpacity>
                                        <Text>Already have an account</Text>
                                        <TouchableOpacity onPress={()=>navigation.navigate("login")} style={{...stylesheet.secondaryButton}}>
                                            <Ionicons name="enter-outline" size={24} color="#FF4191" />
                                            <Text style={{color:"#FF4191",fontSize:20}}>login</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        </Formik>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}