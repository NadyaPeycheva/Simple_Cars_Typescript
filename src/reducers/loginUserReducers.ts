import { UserType } from "../types/types";

const initialUserState: UserType = {
  id: "",
  username: "",
  firstName: "",
  password: null,
  lastName: "",
  token: "",
};

type ActionLogin = {
  type: string;
  payload: UserType;
};

export const loginUserReducer = (
  state = initialUserState,
  action: ActionLogin
) => {
  if (action.type === "LOGIN_USER_SUCCESS") {
    return action.payload;
  } else if (action.type === "FIRST_USER_CHECK") {
    return action.payload;
  } else if (action.type === "LOGOUT_USER") {
    return initialUserState;
  }
  return state;
};
