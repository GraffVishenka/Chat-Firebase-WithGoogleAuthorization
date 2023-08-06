import React, { useContext } from 'react';
import AppBar from "@material-ui/core/AppBar";
import { Button, Grid, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from "react-firebase-hooks/auth";
import { Context } from '..';

const NavBar = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  const l = "l";

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent="flex-end">
          {user ?
            <Button variant="outlined" onClick={() => auth.signOut()}>Выйти</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
              <Button variant="outlined">Логин</Button>
            </NavLink>
          }    
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;