const changedCarErr:boolean=false
type ChangeCarType={type:string}
export const changeCarReducer=(state=changedCarErr,action:ChangeCarType)=>{
    if(action.type==='CHANGE_CAR_SUCCESS'){
        return false
    }
    return state
}