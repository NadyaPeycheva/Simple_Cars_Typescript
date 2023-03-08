import { CarDataType } from "../types/types";
export const getAllCarsAPI=async (): Promise<CarDataType[]>=>{
   const request=await fetch("http://161.35.202.170:8080/cars/all");
   const response:CarDataType[]=await request.json();   
   return response;
}