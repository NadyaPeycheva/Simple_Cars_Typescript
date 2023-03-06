import { put, take, call } from "redux-saga/effects";
import { changeCarSuccess,changeCarUnSuccess, getCars } from "../components/catalog/carActions";

import { CarDataType } from "../types/types";

type ChangeCarPayloadType={
    newCarData:CarDataType,userId:string,token:string
}
export function*changeCarSaga(changeCarApi:(carData:CarDataType,userId:string,token:string)=>Response){

    while(true){
        const action:{type:string,payload:ChangeCarPayloadType}=yield take('CHANGE_CAR');

        yield call(changeCar,changeCarApi, action.payload)
    }

}

function*changeCar(changeCarApi:(carData:CarDataType,userId:string,token:string)=>Response,payload:ChangeCarPayloadType){
    const {newCarData,userId,token}=payload;
    try{
        const response:{}=yield call(changeCarApi,newCarData,userId,token);
        yield put(changeCarSuccess());
        yield put(getCars());

    }catch(error){
        yield put(changeCarUnSuccess());
    }
}