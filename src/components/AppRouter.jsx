import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import {MissChat} from "../utils/MissChat";
import {MissLogin} from "../utils/MissLogin";
import {useAuthState} from "react-firebase-hooks/auth";
import { Context } from '..';

const AppRouter = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  
  return user ?
  (
    <Routes>
      {user && privateRoutes.map(({path, Component}) =>
        <Route key={path} path={path} Component={Component} exact/>
      )}
      <Route path='*' Component={MissChat}/>
    </Routes>
  )
  :
  (
    <Routes>
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} Component={Component} exact/>
      )}
      <Route path='*' Component={MissLogin}/>
    </Routes>
  )
};

export default AppRouter;