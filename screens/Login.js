import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
export default function Login({navigation}){
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
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
            
            title="Login"
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