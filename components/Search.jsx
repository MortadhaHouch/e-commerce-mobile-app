import { View, SafeAreaView, StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import {stylesheet} from "../stylesheet"
import Products from './Products';
export default function Search(props) {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <StatusBar/>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <View style={{...stylesheet.mainContainer}}>
                        <Products/>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}