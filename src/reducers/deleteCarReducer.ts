type DeleteCarActionType={type:string}

export const deleteCarReducer = (state = false, action:DeleteCarActionType) => {
  if (action.type === "DELETE_CAR_SUCCESS") {
    return false;
  } 
  return state;
};
