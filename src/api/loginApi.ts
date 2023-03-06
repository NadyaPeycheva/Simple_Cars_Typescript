import { LoginUserDataType } from "../types/types";

import { UserType } from "../types/types";

export const loginApi=async(userData:LoginUserDataType)=>{
    const request=await fetch("http://161.35.202.170:8080/users/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    })
    const response:{user:UserType,jwtToken:string}=await request.json();
    return response;
}