import { View,TouchableOpacity,TouchableWithoutFeedback,Image, Text, SafeAreaView,TextInput,Button,Modal, KeyboardAvoidingView, StatusBar, Keyboard } from 'react-native'
import React from 'react'
import {Formik} from "formik";
import { stylesheet } from '../stylesheet';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Login() {
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
                            initialValues={{email:"",password:""}}
                        >
                            {(props)=>{
                                return(
                                    <View style={{...stylesheet.form}}>
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
                                            <Text style={{color:"white",fontSize:20}}>login</Text>
                                        </TouchableOpacity>
                                        <Text>not subscribed</Text>
                                        <TouchableOpacity onPress={()=>navigation.navigate("signup")} style={{...stylesheet.secondaryButton}}>
                                            <Ionicons name="enter-outline" size={24} color="#FF4191" />
                                            <Text style={{color:"#FF4191",fontSize:20}}>signup</Text>
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