import { put, take, call } from "redux-saga/effects";
import { getCarsSuccess,getCarsUnSuccess } from "../components/catalog/carActions";

import { CarDataType } from "../types/types";
export default function* getAllCarsSaga(getCarsApi:()=>Response) {
  while (true) {
    yield take("GET_ALL_CARS");
    yield call(getAllCars, getCarsApi);
  }
}

function* getAllCars(getCarsApi:()=>Response) {
  try {
    const res:CarDataType[] = yield call(getCarsApi);
    yield put(getCarsSuccess(res));
  } catch (error) {
    yield put(getCarsUnSuccess());
  }
}
