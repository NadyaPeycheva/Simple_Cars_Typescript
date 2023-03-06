const deleteCarError = false;
type DeleteCarActionType={type:string}
export const deleteCarReducer = (state = deleteCarError, action:DeleteCarActionType) => {
  if (action.type === "DELETE_CAR_SUCCESS") {
    return false;
  } 
  return state;
};
