import { carSevriceUrl } from './config';

import {CarDataType} from '../types/types'


export const changeCarApi=async(carData:CarDataType,userId:string,token:string):Promise<Response>=>{
    const request = await fetch(`${carSevriceUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(carData),
  });
  return request;

}