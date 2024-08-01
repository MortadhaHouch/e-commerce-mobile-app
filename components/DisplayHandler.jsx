import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { stylesheet } from '../stylesheet';

export default function DisplayHandler(props) {
    return (
        <View style={{...stylesheet.toolBox,...props.style}}>
            <Pressable onPress={()=>props.setIsList((val)=>!val)}>
                {
                    props.isList?(
                        <FontAwesome name="list" size={24} color="#FF4191" />
                    ):(
                        <MaterialCommunityIcons name="view-grid" size={24} color="#FF4191" />
                    )
                }
            </Pressable>
            <Pressable onPress={()=>props.setIsAlphabeticallyAsc((val)=>!val)}>
                {
                    props.isAlphabeticallyAsc?(
                        <FontAwesome name="sort-alpha-asc" size={24} color="#FF4191" />
                    ):(
                        <FontAwesome name="sort-alpha-desc" size={24} color="#FF4191" />
                    )
                }
            </Pressable>
            <Pressable onPress={()=>props.setIsNumericallyAsc((val)=>!val)}>
                {
                    props.isNumericallyAsc?(
                        <FontAwesome name="sort-numeric-asc" size={24} color="#FF4191" />
                    ):(
                        <FontAwesome name="sort-numeric-desc" size={24} color="#FF4191" />
                    )
                }
            </Pressable>
        </View>
    )
}