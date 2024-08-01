import { View,TouchableOpacity ,Text,Image,ActivityIndicator,FlatList } from 'react-native'
import React,{useRef,useState} from 'react'
import BottomSheet, { BottomSheetFlatList, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import {stylesheet} from "../stylesheet"
export default function ProductsDetails(props) {
    let bottomSheetRef = useRef();
    let snapPoints = ["10%","50%","100%"];
    let [isLoading,setIsLoading] = useState(false);
    return (
        <BottomSheet 
            snapPoints={snapPoints}
            ref={bottomSheetRef}
            overDragResistanceFactor={1.5}
            detached={true}
            enableContentPanningGesture={true}
            enableHandlePanningGesture={true}
            enableDynamicSizing={true}
            animateOnMount={true}
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"
            onRequestClose={()=>setIsOpen(false)}
            style={{...stylesheet.bottomSheet}}
        >
            <BottomSheetScrollView>
                {
                    props.product ? (
                    <View style={{
                        ...stylesheet.productCard,
                        borderStyle:"solid",
                        borderColor:"#ccc",
                        borderRadius:10,
                        padding:10,
                        margin:10
                    }}>
                        <Image source={{uri:props.product.image}} style={{...stylesheet.thumbNail}}/>
                        <Text style={{...stylesheet.primaryTitle}}>{props.product.title}</Text>
                        <Text style={{...stylesheet.secondaryTitle}}>{props.product.category}</Text>
                        <Text style={{...stylesheet.text}}>{props.product.description}</Text>
                        <Text style={{...stylesheet.textHighlight}}>${props.product.price}</Text>
                    </View>
                    ):(
                        <ActivityIndicator size={30} color="#FF4191"/>
                    )
                }
                <Text>
                    Other recommendations
                </Text>
                {
                    props.filteredProducts ?(
                        <BottomSheetFlatList
                            keyExtractor={(item)=>item.id}
                            data={props.filteredProducts}
                            ListEmptyComponent={<Text>No Products to be shown</Text>}
                            ListHeaderComponent={<Text>{props.filteredProducts.length} products found</Text>}
                            onRefresh={()=>getData()}
                            refreshing={isLoading}
                            renderItem={
                                ({item})=>(
                                    <TouchableOpacity 
                                        activeOpacity={.75} 
                                        style={{...stylesheet.productCard}}>
                                        <Image source={{uri:item.image}} style={{...stylesheet.thumbNail}}/>
                                        <Text>{item.title}</Text>
                                        <Text>{item.category}</Text>
                                        <Text>${item.price}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        />
                    ):(
                        <ActivityIndicator size={30} color="#FF4191"/>
                    )
                }
                <TouchableOpacity 
                    style={{...stylesheet.closeButton}} 
                    onPress={()=>{
                    bottomSheetRef.current?.close();
                    props.setIsOpen(false);
                    props.setProduct(null);
                }}>
                    <AntDesign name="closecircle" size={24} color="white" />
                    <Text style={{color:"white",fontSize:25}}>Close</Text>
                </TouchableOpacity>
            </BottomSheetScrollView>
        </BottomSheet>
    )
}