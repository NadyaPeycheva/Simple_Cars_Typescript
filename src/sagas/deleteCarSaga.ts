import { put, take, call } from "redux-saga/effects";
import { getCars,deleteCarSuccess,deleteCarUnSuccess } from "../components/catalog/carActions";

type DeleteCarPayload={carId:string,userId:string,token:string}
export function* deleteCarSaga(deteleCarApi:(carId:string,userId:string,token:string)=>Response){
    while(true){
       const action:{type:string,payload:DeleteCarPayload}= yield take('DELETE_CAR');
        yield call(deleteCar,deteleCarApi,action.payload)

    }
}

function* deleteCar(deleteCarApi:(carId:string,userId:string,token:string)=>Response,payload:DeleteCarPayload){
    const{carId,userId,token}=payload
    try{
        const res:{}=yield call(deleteCarApi,carId,userId,token);

        yield put(deleteCarSuccess());
        yield put(getCars())

    }catch(error){
        yield put(deleteCarUnSuccess());
    }

}