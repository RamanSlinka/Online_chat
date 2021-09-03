import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import { Context} from "../index";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const Login = () => {

    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth, provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                  alignItems="center"
                  justify="center"
                  style={{height: window.innerHeight - 50}}
            >
                <Grid container
                alignItems="center"
                      justify="center"
                      style={{width: 500, background: "#3f51b5"}}
                >
                    <Box p={5}>
                        <Button
                            onClick={login}
                            variant="outlined">Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;