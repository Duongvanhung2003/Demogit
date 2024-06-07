import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react'
import { authentication, db} from "../firebase/firebaseconfig";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { FlatList } from "react-native";
import ListItem from "../components/Listitem";


export default function Home() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const docsRef = collection(db, 'users');
        const q = query(docsRef, where('userUID', '!=', authentication?.currentUser?.uid));
        const docsSnap = onSnapshot(q, (onSnap) => {
            let data = [];
            onSnap.docs.forEach(user => {
                data.push({ ...user.data()});
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
            title={item.username}
            subTitle={item.email}
            image={item.avaterUrl} />


    )
    return (
        <FlatList
            data={users}
            key={user => user.email}
            renderItem={renderItem}
        />
    )
}
const styles = StyleSheet.create({

})