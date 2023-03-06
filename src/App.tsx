import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { firstUserCheck, logout } from "./components/login/loginAction";
import Catalog from "./containers/Catalog";
import Login from "./containers/Login";
import Register from "./containers/Register";

import { UserType } from "./types/types";
import { RootStateType } from "./configureStore";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateType) => state.loginUserReducer);

  useEffect(() => {
    const localeUser:UserType = JSON.parse(localStorage.getItem("user") || "");
    if (localeUser) {
      dispatch(firstUserCheck(localeUser));
    }
  }, []);

   if (user.username) {
    setTimeout(() => {
      dispatch(logout());
    }, 300000);
  }

  return (
    <Switch>
      <Route path="/" exact>
        {!user.username && <Redirect to="/register"></Redirect>}
        {user.username && <Redirect to="/catalog"></Redirect>}
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
