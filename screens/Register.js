import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function Register(){
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [username, setUsername] =useState('');
    const [avater, setAvater ] =useState('');
    const registerUser= async ()=>{
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredentials)=>{
            console.log(userCredentials)
            console.log('Just registered a user')
        })
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