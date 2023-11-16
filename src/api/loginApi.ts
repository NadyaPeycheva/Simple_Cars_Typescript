import { loginUserUrl } from "./config";

import { LoginUserDataType } from "../types/types";
import { LogedUserType } from "../types/types";

export const loginApi=async(userData:LoginUserDataType):Promise<LogedUserType>=>{
    const request=await fetch(loginUserUrl,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    })
    const response:LogedUserType=await request.json();
    return response;
}