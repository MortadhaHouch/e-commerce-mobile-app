import React,{useState,useEffect} from 'react'
import { FlatList,View,Text, SafeAreaView, StatusBar, TouchableWithoutFeedback,TouchableOpacity, Keyboard,Image, Pressable } from 'react-native'
import {stylesheet} from "../stylesheet"
import ProductsDetails from './ProductsDetails';
import { fetchData } from '../fetchData';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterProcess from './RegisterProcess';
import SearchBox from './SearchBox';
export default function Favorites() {
    let [isOpen,setIsOpen] = useState(false);
    let [products,setProducts] = useState([]);
    let [error,setError] = useState(null);
    let [isLoading,setIsLoading] = useState(false);
    let [productName,setProductName] = useState("");
    let [product,setProduct] = useState(null);
    let [filteredProducts,setFilteredProducts] = useState([]);
    let [user,setUser] = useState(null);
    let [isList,setIsList] = useState(false);
    let [ isAlphabeticallyAsc , setIsAlphabeticallyAsc] = useState(false)
    let [ isNumericallyAsc , setIsNumericallyAsc] = useState(false)
    async function getData(){
        try {
            let response = await fetchData(process.env.EXPO_PUBLIC_REQUEST_URL,"GET",null,setIsLoading);
            setProducts(response);
        } catch (error) {
            setError(error);
        }
    }
    async function checkUser(){
        try {
            let isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
            if(isLoggedIn){
                let user = await AsyncStorage.getItem("user");
                setUser(JSON.parse(user));
            }
        } catch (error) {
            setUser(null);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        setProduct(product);
        return ()=>setProduct(null);
    }, [product])
    return (
        <SafeAreaView style={stylesheet.mainContainer}>
            <StatusBar/>
            <TouchableWithoutFeedback style={{...stylesheet.mainContainer,backgroundColor:product?"gray":"white"}}>
                <View style={{...stylesheet.productsList}}>
                    <SearchBox
                        isList={isList}
                        setIsList={setIsList}
                        isAlphabeticallyAsc={isAlphabeticallyAsc}
                        setIsAlphabeticallyAsc={setIsAlphabeticallyAsc}
                        isNumericallyAsc={isNumericallyAsc}
                        setIsNumericallyAsc={setIsNumericallyAsc}
                    />
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={products}
                        ListEmptyComponent={<Text>No Products to be shown</Text>}
                        ListHeaderComponent={<Text>{products.length} products found</Text>}
                        onRefresh={()=>getData()}
                        refreshing={isLoading}
                        renderItem={
                            ({item})=>(
                                <TouchableOpacity 
                                    activeOpacity={.75} 
                                    style={{...stylesheet.productCard}} 
                                    onPress={()=>{
                                        setProduct(item);
                                        setIsOpen(true);
                                        // setFilteredProducts(products.filter((el)=>el.category == product.category))
                                    }}>
                                    <Feather 
                                        name="bookmark" 
                                        size={24} 
                                        color="#FF4191" 
                                        style={{
                                            position:"absolute",
                                            top:10,
                                            right:10
                                        }}
                                        onPress={checkUser}
                                    />
                                    <Image source={{uri:item.image}} style={{...stylesheet.thumbNail}}/>
                                    <Text style={{...stylesheet.primaryTitle}}>{item.title}</Text>
                                    <Text style={{...stylesheet.secondaryTitle}}>{item.category}</Text>
                                    <Text style={{...stylesheet.textHighlight}}>${item.price}</Text>
                                </TouchableOpacity>
                            )
                        }
                    />
                    {
                        product && (
                            <ProductsDetails setIsOpen={setIsOpen} product={product} setProduct={setProduct} filteredProducts={filteredProducts}/>
                        )
                    }
                    {
                        user ? (
                            <Text></Text>
                        ):(
                            <RegisterProcess/>
                        )
                    }
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
