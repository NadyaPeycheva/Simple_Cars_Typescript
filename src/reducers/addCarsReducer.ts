const initialState={newCar:''}
type AddCarAction={type:string}
export const addCarReducer=(state=initialState,action:AddCarAction)=>{
if(action.type==='ADD_CAR_SUCCESS'){
    return {newCar:'New car added successfully'}
}
return state;
}