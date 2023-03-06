import { take, call,put } from "redux-saga/effects";
import { registerSuccess,registerUnSuccess } from "../components/register/registerAction";
import { RegisterUdarDataType } from "../types/types";

type RegisterActionType={
  type:string,payload:RegisterUdarDataType
}
export default function* registerUserSaga(registerApi:(userData:RegisterUdarDataType)=>Response|string) {
  while (true) {
    const action:RegisterActionType = yield take("REGISTER_USER");

    yield call(registerUser, registerApi, action.payload);
  }
}

function*registerUser(registerApi:(userData:RegisterUdarDataType)=>Response|string, userData:RegisterActionType) {
  try {
  const rest:{}=yield call(registerApi,userData);

    yield put(registerSuccess());

  } catch (error) {
    yield put(registerUnSuccess());
  }
}
