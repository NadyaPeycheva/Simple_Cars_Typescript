import {CarDataType} from "../types/types"

export const addCarApi = async (carData:CarDataType, token:string) => {
  const request = await fetch("http://161.35.202.170:8080/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(carData),
  });
  return request;
};
