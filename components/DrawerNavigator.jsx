import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome,Fontisto } from '@expo/vector-icons';
import {  } from '@expo/vector-icons';
import Products from './Products';
let Navigator = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Navigator.Navigator
            initialRouteName="categories" 
            screenOptions={({route})=>({
            drawerIcon: ({ focused, color, size }) => {
                let iconComponent;
                switch (route.name) {
                    case "marked":
                        iconComponent = <FontAwesome name="bookmark" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "removed from list":
                        iconComponent = <Fontisto name="shopping-basket-remove" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "added to list":
                        iconComponent = <Fontisto name="shopping-basket-add" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                }
                return iconComponent;
            },
            drawerActiveTintColor: "#ED5AB3",
            drawerInactiveTintColor: "#776B5D",
            headerTitleAlign: "center",
            headerTintColor: "#ED5AB3",
        })}>
            <Navigator.Screen name="added to list" component={Products}/>
            <Navigator.Screen name="removed from list" component={Products}/>
            <Navigator.Screen name="marked" component={Products}/>
        </Navigator.Navigator>
    )
}