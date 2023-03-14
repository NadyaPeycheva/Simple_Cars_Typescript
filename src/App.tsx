import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch} from "react-router";

import { firstUserCheck} from "./components/login/loginAction";

import Header from "./components/header/Header";
import Catalog from "./containers/Catalog";
import Login from "./containers/Login";
import Register from "./containers/Register";

import { RootStateType } from "./configureStore";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateType) => state.loginUserReducer);
  const [hasHeader,setHasHeader]=useState(false);

  const visibleHeader=(currentState:boolean)=>{    
    setHasHeader(currentState);
  }

  useEffect(() => {
    const localeUser = JSON.parse(localStorage.getItem("user")||'{}');
    if (localeUser) {
      dispatch(firstUserCheck(localeUser));
    }
  }, []);

  return (
    <>
   {hasHeader&&<Header  />}
    <Switch>
      <Route path="/" exact>
        {!user.username ?<Redirect to="/login"></Redirect>:<Redirect to="/catalog"></Redirect>}
      </Route>
      <Route path="/catalog">
        <Catalog visibleHeader={visibleHeader}/>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
    </>
  );
}

export default App;
