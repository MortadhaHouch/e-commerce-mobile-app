import {StyleSheet} from "react-native"
const stylesheet = StyleSheet.create({
    mainContainer:{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"relative",
        gap:10
    },
    searchBox:{
        width:"100%",
        padding:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        gap:10
    },
    textInput:{
        width:"95%",
        padding:5,
        fontSize:20,
        borderStyle:"solid",
        borderColor:"#FF4191",
        borderWidth:1,
        borderRadius:5,
    },
    bottomSheet:{
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        gap:10
    },
    closeButton:{
        width:"100%",
        height:"auto",
        backgroundColor:"red",
        borderRadius:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        color:"white",
        padding:5
    },
    primaryButton:{
        width:"90%",
        height:"auto",
        backgroundColor:"#FF4191",
        borderRadius:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        color:"white",
        padding:5
    },
    secondaryButton:{
        width:"90%",
        height:"auto",
        backgroundColor:"transparent",
        borderRadius:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        color:"white",
        borderStyle:"solid",
        borderWidth:2,
        borderColor:"#FF4191",
        padding:5
    },
    productCard:{
        width:"90%",
        height:"auto",
        borderRadius:10,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderStyle:"solid",
        position:"relative",
        borderWidth:2,
        borderColor:"#FF4191",
        padding:10,
        gap:10,
        margin:5
    },
    form:{
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
        gap:10,
        padding:10
    },
    primaryTitle:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:10,
        color:"#180161"
    },
    secondaryTitle:{
        fontSize:22.5,
        fontWeight:"bold",
        marginBottom:10,
        color:"#FF4191"
    },
    text:{
        fontSize:20,
        color:"#000000"
    },
    textHighlight:{
        fontSize:20,
        fontWeight:"bold",
        color:"#EF5A6F"
    },
    thumbNail:{
        width:150,
        height:150,
        borderRadius:10,
        borderWidth:2,
    },
    logo:{
        width:250,
        height:250,
        borderRadius:10,
        marginBottom:20,
    },
    productsList:{
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
        gap:10
    },
    toolBox:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#EEEEEE",
        width:"100%",
        height:"auto",
        position:"absolute",
        padding:10,
        top:0,
        left:0,
        zIndex:10,
        gap:10,
    },
    dropdown: {
        height: 50,
        width: '95%',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});
export {stylesheet}