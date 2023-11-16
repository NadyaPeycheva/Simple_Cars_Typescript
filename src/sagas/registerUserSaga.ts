import { take, call,put } from "redux-saga/effects";
import { redirectToLogin, registerSuccess,registerUnSuccess } from "../components/register/registerAction";
import { RegisterUdarDataType } from "../types/types";

type RegisterActionType={
  type:string,payload:RegisterUdarDataType
}

export default function* registerUserSaga(registerApi:(userData:RegisterUdarDataType)=>Promise<Response>) {
  while (true) {
    const action:RegisterActionType = yield take("REGISTER_USER");

    yield call(registerUser, registerApi, action.payload);
  }
}

function*registerUser(registerApi:(userData:RegisterUdarDataType)=>Promise<Response>, userData:RegisterUdarDataType) {
  try {
  const rest:{}=yield call(registerApi,userData);

    yield put(registerSuccess());
    yield put(redirectToLogin())

  } catch (error) {
    yield put(registerUnSuccess());
  }
}
