import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import { collection, setDoc, doc } from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        collection(firestore,'messages')

    )

    const sendMessage = async () => {
        // collection(firestore,'messages').
        setDoc(doc(firestore,'messages'),{
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if(loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  justify="center"
                  style={{height: window.innerHeight - 50, marginTop: "10px"}}
            >
                <div style={{
                    width: "80%", height: "65vh", border: "2px solid blue",
                    overflowY: "auto", borderRadius: "5px"
                }}>
                    {messages?.map(message =>
                    <div
                        key={message.uid}
                        style={{
                        margin: 10,
                        border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                        marginLeft: user.uid === message.uid ? 'auto' : '10px',
                        width: 'fit-content',
                        padding: 5
                    }}>
                        <Grid container>
                            <Avatar  src={message.photoURL}/>
                            <div>{message.displayName}</div>
                        </Grid>
                        {message.text}
                    </div>
                    )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: "80%"}}
                >
                    <TextField variant={"outlined"}
                               fullWidth
                               rowsMax={2}
                               value={value}
                               onChange={(e) => setValue(e.target.value)}

                    />
                    <Button
                        variant={"contained"}
                        onClick={sendMessage}
                    >Send</Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;

