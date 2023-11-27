import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button,StyleSheet,Text,View,TouchableOpacity, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Onboarding=()=>{
    const insets=useSafeAreaInsets();
    const navigation=useNavigation();

    const handleNavigate=()=>{
        navigation.navigate('BottomView');
    };
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/OnBoard.png')}></Image>
            <Text style={styles.title}>Coffee so good,{`\n`} your taste buds{`\n`} will love it.</Text>
            <Text style={styles.description}>The best grain, the finest roast, the{`\n`}powerful flavor. </Text>
            <TouchableOpacity onPress={handleNavigate} style={[styles.button,{marginBottom:insets.bottom+9}]}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        overflow:'hidden',
        backgroundColor:"black",
    },
    title:{
        fontSize:34,
        fontWeight:'600',
        color:'white',
        textAlign:'center',
        marginBottom:8,
    },
    image:{
        width:'125%',
        position:'absolute',
        resizeMode:'contain',
        top:'-26%',
        height:"100%",
        alignSelf:"center",
    },
    description:{
        fontSize:14,
        color:'#A9A9A9',
        textAlign:'center',
        marginBottom:24,
    },
    button:{
        height:62,
        width:'85%',
        backgroundColor:'#C67C4E',
        borderRadius:16,
        marginHorizontal:'7%',
        justifyContent:"center",
        alignItems:'center',
    },
    buttonText:{
        fontSize:16,
        fontWeight:'600',
        color:'white',
        fontFamily:''
    },
});