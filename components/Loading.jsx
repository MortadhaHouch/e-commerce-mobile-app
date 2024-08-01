import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { stylesheet } from '../stylesheet'

export default function Loading(props) {
    return (
        <View style={stylesheet.mainContainer}>
            {/* {
                props.state == "" && (
                )
            }
            {
                props.state == "mark" && (
                )
            } */}
            <LottieView source={require("../assets/Animation - 1721945767567.json")}/>
        </View>
    )
}