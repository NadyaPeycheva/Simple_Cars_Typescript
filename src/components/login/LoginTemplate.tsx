import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { loginAction } from "./loginAction";
import logo from "../../resources/cars.png";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const LoginTemplate = () => {
  const dispatch = useDispatch();

  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [errorData, setErrorData] = useState({
    username: false,
    password: false,
  });
  const isBtnDisabled = errorData.username || errorData.password;

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentKey = e.target.name;
    const newValue = !e.target.value;
    const newProp: Record<string, boolean> = {};
    newProp[currentKey] = newValue;

    setErrorData((state) => {
      return { ...state, ...newProp };
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const loginUserData = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
    };
    dispatch(loginAction(loginUserData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              inputRef={usernameRef}
              onChange={handleUserData}
              error={errorData.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
              onChange={handleUserData}
              error={errorData.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#3F51B5" }}
              disabled={isBtnDisabled}
            >
              Sign In
            </Button>

            <Grid item sx={{ textAlign: "center" }}>
              <Link
                to="/register"
                style={{ textDecoration: "none", display: "block" }}
              >
                Don't have an account?
              </Link>
              <Link
                to="/catalog"
                style={{ textDecoration: "none", display: "block" }}
              >
                Continue to catalog
              </Link>
            </Grid>
            <Grid item sx={{ m: 3 }}>
              <img src={logo} alt="cars logo" />
            </Grid>
          </Box>
        </Box>
        <Grid item>
          <span>Copyright © Mobile{new Date().getFullYear()}</span>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default LoginTemplate;
