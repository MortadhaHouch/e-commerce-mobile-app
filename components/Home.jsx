import { View, Text, SafeAreaView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <SafeAreaView>
            <StatusBar/>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <View>
                    <Text>Home</Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}