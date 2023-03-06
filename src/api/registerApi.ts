import { RegisterUdarDataType } from "../types/types";

export const registerApi = async (userData:RegisterUdarDataType) => {
  const res =await fetch("http://161.35.202.170:8080/users/register", {
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
