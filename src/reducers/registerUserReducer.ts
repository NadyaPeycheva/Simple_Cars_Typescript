const registerError='';
type RegisterActionType={type:string}
export const registerUserReducer=(state=registerError,action:RegisterActionType)=>{
    if(action.type === 'REGISTER_USER_SUCCESS'){
        return ''
    }
    return state;
}