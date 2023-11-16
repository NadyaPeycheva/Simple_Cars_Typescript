import { registerUserUrl } from "./config";

import { RegisterUdarDataType } from "../types/types";

export const registerApi = async (userData:RegisterUdarDataType):Promise<Response> => {
  const res =await fetch(registerUserUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
if(res.status!==200){
  throw new Error("The request is not successful")
}
  return res
};
