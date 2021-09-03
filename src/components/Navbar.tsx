import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar position="static" color="primary">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    React_Chat
                </Typography>

                <Grid container justifyContent="flex-end">
                    {user ?
                        <Button
                            onClick={() => auth.signOut()}
                            variant="outlined" color="inherit">Log out </Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant="outlined" color="inherit">Log in </Button>
                        </NavLink>

                    }


                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;