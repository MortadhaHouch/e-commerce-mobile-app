import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Search from './components/Search';
import Profile from './components/Profile';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DrawerNavigator from './components/DrawerNavigator';
let BottomTabNavigation = createMaterialBottomTabNavigator();
import "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoginProvider } from './providers/LoginProvider';
import { DarkThemeProvider } from './providers/DarkThemeProvider';
export default function App() {
  return (
    <DarkThemeProvider>
      <LoginProvider>
          <NavigationContainer>
            <GestureHandlerRootView>
              <BottomTabNavigation.Navigator initialRouteName='Home' screenOptions={({route})=>({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconComponent;
                  switch (route.name) {
                    case "Home":
                      iconComponent = <Entypo name="home" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "Card":
                      iconComponent = <FontAwesome6 name="cart-shopping" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "Favorites":
                      iconComponent = <AntDesign name="heart" size={24} color={focused?"#ED5AB3":"#776B5D"}  />
                    break;
                    case "Search":
                      iconComponent = <FontAwesome name="search" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "Profile":
                      iconComponent = <AntDesign name="user" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "Category":
                      iconComponent = <AntDesign name="user" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "Profile":
                      iconComponent = <AntDesign name="user" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                    break;
                    case "filters":
                      iconComponent = <FontAwesome name="filter" size={24} color={focused?"#ED5AB3":"#776B5D"} />
                      break;
                  }
                  return iconComponent;
                },
                tabBarActiveTintColor:"#ED5AB3",
                tabBarInactiveTintColor:"#776B5D",
                headerTitleAlign:"center",
                headerTintColor:"#ED5AB3",
            })}>
              <BottomTabNavigation.Screen name="Home" component={Home}/>
              <BottomTabNavigation.Screen name="Card" component={DrawerNavigator}/>
              <BottomTabNavigation.Screen name="Favorites" component={Favorites}/>
              <BottomTabNavigation.Screen name="Search" component={Search}/>
              <BottomTabNavigation.Screen name="Profile" component={Profile}/>
            </BottomTabNavigation.Navigator>
          </GestureHandlerRootView>
        </NavigationContainer>
      </LoginProvider>
    </DarkThemeProvider>
  );
}