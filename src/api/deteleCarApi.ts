import { carSevriceUrl } from "./config";

export const deleteCarApi=async(carId:string,userId:string,token:string):Promise<Response>=>{
    const request=await fetch(`${carSevriceUrl}/${carId}/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
    })
return request;
}