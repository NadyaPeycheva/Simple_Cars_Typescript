import { put, take, call } from "redux-saga/effects";

import { addCarSuccess,addCarUnSuccess} from "../components/catalog/carActions";

import { CarDataType } from "../types/types";
type AddCarPayloadType={car:CarDataType,token:string}

export function* addCarSaga(addCarApi:(carData:CarDataType,token:string)=>Promise<Response>){
    while(true){
        const action:{type:string,payload:AddCarPayloadType}=yield take('ADD_CAR');
        
        yield call(addCar,addCarApi,action.payload)
    }
}

function* addCar(addCarApi:(carData:CarDataType,token:string)=>Promise<Response>,data:AddCarPayloadType){
    const {car,token}=data;
try{
    const res:{}=yield call(addCarApi,car,token);
    
    yield put(addCarSuccess([car]));

}catch(error){
    yield put(addCarUnSuccess());
}
}