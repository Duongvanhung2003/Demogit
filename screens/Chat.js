import { StyleSheet, Text, View } from "react-native"
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { authentication, db } from "../firebase/firebaseconfig"
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore"


export default function Chat({route}) {
    const uid= route.params.uid
    const [messages, setMessages] = useState([]);
    const currentUser = authentication?.currentUser?.uid;

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messagesArray) => {
        const msg = messagesArray[0];
        // console.log(myMsg)
        const myMsg ={
            ...msg,
            sendBy: currentUser,
            sendTo: uid
        // chatrooms/1233438485/messages/123mgs/, createdat
        }
        console.log(myMsg)
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, myMsg),
        )
        const chatId =uid> currentUser ? `${uid + '-' + currentUser}` : `${currentUser + '-' + uid}`
        const docref = doc(db, 'chatrooms', chatId);
        const colRef = collection(docref, 'messages');
        const chatSnap = addDoc(colRef, {
            ...myMsg,
            createAt: serverTimestamp(), 
        })
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={text => onSend(text)}
            user={{
                _id: authentication?.currentUser?.uid,
            }}
        />
    )
}
const styles = StyleSheet.create({

})