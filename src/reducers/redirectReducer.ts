type RedirectType={type:string,payload:string};

export const redirectReducer=(state='',action:RedirectType)=>{
    if(action.type==='REDIRECT'){
        return action.payload
    }
    return state

}