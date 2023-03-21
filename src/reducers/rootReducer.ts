import { combineReducers } from "redux";
import { getAllCarsReducer } from "./getAllCarsReducer";
import { loginUserReducer } from "./loginUserReducers";
import { visibleRowReducer } from "./visibleRowReducer";
import { deleteCarReducer } from "./deleteCarReducer";
import { changeCarReducer } from "./changeCarReducer";
import { registerUserReducer } from "./registerUserReducer";
import { errorReducer } from "./errorReducer";
import { redirectReducer } from "./redirectReducer";

export default combineReducers({getAllCarsReducer,loginUserReducer,registerUserReducer,visibleRowReducer,deleteCarReducer,changeCarReducer,errorReducer,redirectReducer})