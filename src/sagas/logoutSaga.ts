import { put, take, call } from "redux-saga/effects";
import { logoutUser } from "../components/login/loginAction";

export function*logoutSaga(){
    while(true){
        yield take('LOGOUT')

        yield call(logout)
    }
}

function*logout(){
    yield localStorage.clear();

    yield put(logoutUser())
}