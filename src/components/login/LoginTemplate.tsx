import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import logo from "../../resources/cars.png";
import React, { useEffect, useState } from "react";
import { loginAction } from "./loginAction";
const theme = createTheme();

const initialUserData = { username: "", password: "" };
const initialErrorData = { username: false, password: false };
const LoginTemplate = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(initialUserData);
  const [errorData, setErrorData] = useState(initialErrorData);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleUserData = (e:React.ChangeEvent<HTMLInputElement>) => {
    const currentKey = e.target.name;
    const newValue = e.target.value;
    const newProp:Record<string,string|boolean> = {};
    newProp[currentKey] = newValue;
    setUserData((state) => {
      return { ...state, ...newProp };
    });
    if (newValue === "") {
      newProp[currentKey] = true;
    } else {
      newProp[currentKey] = false;
    }
    setErrorData((state) => {
      return { ...state, ...newProp };
    });
  };

  useEffect(() => {
    if (userData.username === "" || userData.password === "") {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [userData]);

  const submitHandler = (e:React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAction(userData));
    setUserData(initialUserData);
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
              value={userData.username}
              autoComplete="username"
              autoFocus
              onChange={handleUserData}
              error={errorData.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={userData.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleUserData}
              error={errorData.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#3F51B5" }}
              disabled={disabledBtn}
            >
              Sign In
            </Button>

            <Grid item sx={{textAlign:'center',}}>
                <Link to='/register' style={{ textDecoration: "none",display:'block'}}>Don't have an account?</Link>
                <Link to='/catalog' style={{ textDecoration: "none",display:'block'}}>Continue to catalog</Link>
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
