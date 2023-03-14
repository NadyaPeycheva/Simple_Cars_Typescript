import { LoginUserDataType } from "../../types/types"
import { UserType } from "../../types/types"

export const loginAction=(userData:LoginUserDataType)=>{
    return(
        {type:"LOGIN_USER",payload:userData}
    )
}

export const firstUserCheck=(user:UserType)=>{
    return{
        type:"FIRST_USER_CHECK",payload:user
    }
}

export const loginUserSuccess=(user:UserType)=>{
    return(
        {type:"LOGIN_USER_SUCCESS",payload:user}
    )
}
export const loginUserUnSuccess=()=>{
    return(
        {type:"ERROR",payload:'The user is not login. Please try with valid date !'}
    )
}

export const logoutUser=()=>{
    return{
        type:"LOGOUT_USER"
    }
}

export const logout=()=>{
    return{
        type:"LOGOUT"
    }
}