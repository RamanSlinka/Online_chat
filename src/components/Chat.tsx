import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@material-ui/core";

const Chat = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
   // const [message, loading] = useCollectiondata()

    const sendMessage = async () => {
        console.log(value)
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