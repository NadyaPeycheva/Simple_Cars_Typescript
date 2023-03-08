import { take, call, put } from "redux-saga/effects";
import { loginUserSuccess,loginUserUnSuccess } from "../components/login/loginAction";

import { LoginUserDataType } from "../types/types";
import { UserType } from "../types/types";
import { LogedUserType } from "../types/types";
 
type LoginActionType={type:string,payload:LoginUserDataType}
export function* loginSaga(loginApi:(userData:LoginUserDataType)=>Promise<LogedUserType>) {
  while (true) {
    const action:LoginActionType = yield take("LOGIN_USER");

    yield call(loginUser, loginApi, action.payload);
  }
}

function* loginUser(loginApi:(userData:LoginUserDataType)=>Promise<LogedUserType>, userData:LoginUserDataType) {
  try {
    const res:{user:UserType,jwtToken:string} = yield call(loginApi,userData);
    const user:UserType= {
      id:res.user.id,
      username:res.user.username,
      firstName:res.user.firstName,
      password:null,
      lastName:res.user.lastName,
      token:res.jwtToken
  }
    yield put(loginUserSuccess(user));
    yield localStorage.setItem('user',JSON.stringify(user));
  } catch (err) {
    yield put(loginUserUnSuccess());
  }
}
