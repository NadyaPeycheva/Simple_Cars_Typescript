type RegisterActionType={type:string}

export const registerUserReducer=(state='',action:RegisterActionType)=>{
    if(action.type === 'REGISTER_USER_SUCCESS'){
        return ''
    }
    return state;
}