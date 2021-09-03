import React from 'react';
import {CircularProgress, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <CircularProgress color={"primary"}/>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Loader;