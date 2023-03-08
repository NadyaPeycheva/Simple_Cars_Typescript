import { all } from "redux-saga/effects";

import { registerApi } from "../api/registerApi";
import { getAllCarsAPI } from "../api/getAllCars";
import { loginApi } from "../api/loginApi";
import { addCarApi } from "../api/addCarApi";
import { deleteCarApi } from "../api/deteleCarApi";
import { changeCarApi } from "../api/changeCarApi";

import registerUserSaga from "./registerUserSaga";
import getAllCarsSaga from "./getAllCarsSaga";
import { loginSaga } from "./loginSaga";
import { addCarSaga } from "./addCarSaga";
import { deleteCarSaga } from "./deleteCarSaga";
import { changeCarSaga } from "./changeCarSaga";
import { logoutSaga } from "./logoutSaga";

function* rootSaga(){
    yield all([
        getAllCarsSaga(getAllCarsAPI),
        registerUserSaga(registerApi),
        loginSaga(loginApi),
        addCarSaga(addCarApi),
        deleteCarSaga(deleteCarApi),
        changeCarSaga(changeCarApi),
        logoutSaga()
    ])
}
export default rootSaga;