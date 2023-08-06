import { Box, Button, Container, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "..";
import firebase from "firebase/compat/app";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          style={{ width: 400, height: 120, background: "lightgray" }}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Box p={5}>
            <Button variant="outlined" onClick={login}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
