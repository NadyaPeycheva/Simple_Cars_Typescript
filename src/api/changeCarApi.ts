import {CarDataType} from '../types/types'

export const changeCarApi=async(carData:CarDataType,userId:string,token:string)=>{
    const request = await fetch(`http://161.35.202.170:8080/cars/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(carData),
  });
  return request;

}