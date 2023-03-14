type ErrorActionType={
    type:string,
    payload:string

}

export const errorReducer=(state='',action:ErrorActionType)=>{
    if(action.type === 'ERROR'){
        return action.payload
    }else if(action.type === 'REMOVE_ERROR'){
        return ''
    }
return state;
}