import { View, Text, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React,{useRef} from 'react'
import { SafeAreaView } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Button } from 'react-native-paper';
export default function Card() {
    let snapPoints = ["50%","100%"];
    let bottomSheetRef = useRef();
    return (
        <SafeAreaView>
            <StatusBar/>
            <Button title="button"/>
        </SafeAreaView>
    )
}