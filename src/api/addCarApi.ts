import { carSevriceUrl } from "./config";

import {CarDataType} from "../types/types"


export const addCarApi = async (carData:CarDataType, token:string):Promise<Response> => {
  const request = await fetch(carSevriceUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(carData),
  });
  return request;
};
