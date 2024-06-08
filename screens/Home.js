import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react'
import { authentication, db } from "../firebase/firebaseconfig";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { FlatList } from "react-native";
import ListItem from "../components/Listitem";
import { Button } from "react-native-elements";


export default function Home({ navigation }) {
    const [users, setUsers] = useState([]);

    const logoutUser = async ()=>{
        authentication.signOut()
        .then(() => {
            navigation.replace('Login')
        })
    }

    const getUsers = async () => {
        const docsRef = collection(db, 'users');
        const q = query(docsRef, where('userUID', '!=', authentication?.currentUser?.uid));
        const docsSnap = onSnapshot(q, (onSnap) => {
            let data = [];
            onSnap.docs.forEach(user => {
                data.push({ ...user.data() });
                setUsers(data)
                console.log(user.data())
            })
        })
    }
    useEffect(() => {
        getUsers();
    }, [])
    const renderItem = ({ item }) => (
        <ListItem
            onPress={() => navigation.navigate('Chat', {name:item.username })}
            title={item.username}
            subTitle={item.email}
            image={item.avaterUrl} />


    )
    return (<>
        <FlatList
            data={users}
            key={user => user.email}
            renderItem={renderItem}
        />
        <Button
            title='log out'
            onPress={logoutUser}
        />
    </>
    )
}
const styles = StyleSheet.create({

})