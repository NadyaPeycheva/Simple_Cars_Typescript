import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import registerAction from "./registerAction";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const RegisterTemplate = () => {
  const dispatch = useDispatch();

  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [errorData, setErrorData] = useState({
    firstName: false,
    lastName: false,
    username: false,
    password: false,
  });
  const buttonIsDisabled =
    errorData.firstName ||
    errorData.lastName ||
    errorData.username ||
    errorData.password;

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentKey = e.target.name;
    const newValueError = e.target.value ? false : true;
    const newProp: Record<string, boolean | string> = {};
    newProp[currentKey] = newValueError;
    setErrorData((state) => {
      return { ...state, ...newProp };
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    const userData = {
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
    };

    e.preventDefault();
    dispatch(registerAction(userData));
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            onSubmit={submitHandler}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={firstNameRef}
                  onChange={handleUserData}
                  error={errorData.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputRef={lastNameRef}
                  onChange={handleUserData}
                  error={errorData.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  inputRef={usernameRef}
                  onChange={handleUserData}
                  error={errorData.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={passwordRef}
                  onChange={handleUserData}
                  error={errorData.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#3F51B5" }}
              disabled={buttonIsDisabled}
            >
              Sign Up
            </Button>
            <Grid item>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Box>
        </Box>
        <Grid item sx={{ mt: 10 }}>
          <span>Copyright © Mobile{new Date().getFullYear()}</span>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default RegisterTemplate;
