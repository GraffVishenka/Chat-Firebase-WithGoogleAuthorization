import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import "./App.css";
import {useAuthState} from "react-firebase-hooks/auth";
import { Context } from './index';
import Loader from "./components/Loader";

const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading) return <Loader/>;

  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
};

export default App;
