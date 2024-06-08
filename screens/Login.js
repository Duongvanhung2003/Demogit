import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, Button } from "react-native-elements";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebase/firebaseconfig";

export default function Login({navigation}){
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    const loginUser = async ()=>{
        signInWithEmailAndPassword(authentication, email, password)
        .then(()=> console.log('User logged in'))
    }
    useEffect(()=>{
        onAuthStateChanged(authentication, (user)=>{
            if(user){
                navigation.navigate('Home')
            }
            else{
                // console.log('no user')
                navigation.canGoBack() && navigation.popToTop();
            }
        })
    },[])
    return(
        <View>
            <Input
            placeholder="Enter your email"
            label="Email"
            value= {email}
            onChangeText={text => setEmail(text)}
            leftIcon={{type:'material', name: 'email'}}
            />
            <Input
            
            placeholder="Enter your password"
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            leftIcon={{type:'material', name: 'lock'}}
            secureTextEntry
            />
            <Button
            style={styles.btn}
            title="Login"
            onPress={loginUser}

            />
            <Button
            style={styles.btn}
            onPress={()=> navigation.navigate('Register') }
            title="Register"
            />

        </View>
    )

}
const styles= StyleSheet.create({
    container:{
        flex: 1
    },
    btn:{
        marginTop: 10
    }

})