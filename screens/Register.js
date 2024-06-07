import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, Button } from "react-native-elements";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { authentication } from "../firebase/firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";
export default function Register(){
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [username, setUsername] =useState('');
    const [avater, setAvater ] =useState('');
    const registerUser= async ()=>{
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredentials)=>{
            const userUID = userCredentials.user.uid;
            const docRef = doc(db, 'users', userUID);
            const docSnap = setDoc(docRef,{
                avaterUrl: avater ?  avater: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" ,
                username,
                password,
                userUID

        })
        })
        .then (()=> console.log('successful'))
    }
    
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
            <Input
            
            placeholder="Username"
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            leftIcon={{type:'material', name: 'account-circle'}}
            
            />
            <Input
            
            placeholder="Avater url"
            label="Avater"
            value={avater}
            onChangeText={text => setAvater(text)}
            leftIcon={{type:'material', name: 'link'}}
            secureTextEntry
            />
           
            <Button
            onPress={registerUser}
            style={styles.btn}
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