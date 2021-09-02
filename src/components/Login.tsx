import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Login = () => {
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
                        <Button variant="outlined">Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;