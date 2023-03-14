import { carSevriceUrl } from "./config";

import { CarDataType } from "../types/types";


export const getAllCarsAPI=async (): Promise<CarDataType[]>=>{
   const request=await fetch(`${carSevriceUrl}/all`);
   const response:CarDataType[]=await request.json();   
   return response;
}