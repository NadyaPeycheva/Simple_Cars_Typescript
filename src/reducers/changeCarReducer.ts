type ChangeCarType={type:string}

export const changeCarReducer=(state=false,action:ChangeCarType)=>{
    if(action.type==='CHANGE_CAR_SUCCESS'){
        return false
    }
    return state
}