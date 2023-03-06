import { CarDataType } from "../types/types";
type GetCarsAction={type:string,payload:CarDataType[]}
export const getAllCarsReducer=(state:CarDataType[]=[],action:GetCarsAction)=>{
    if(action.type ==='GET_ALL_CARS_SUCCESS'){
        return action.payload;
    }
    return state;
}