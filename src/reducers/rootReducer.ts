import { combineReducers } from "redux";
import { getAllCarsReducer } from "./getAllCarsReducer";
import { loginUserReducer } from "./loginUserReducers";
import { visibleRowReducer } from "./visibleRowReducer";
import { deleteCarReducer } from "./deleteCarReducer";
import { addCarReducer } from "./addCarsReducer";
import { changeCarReducer } from "./changeCarReducer";
import { registerUserReducer } from "./registerUserReducer";
import { errorReducer } from "./errorReducer";

export default combineReducers({getAllCarsReducer,loginUserReducer,registerUserReducer,visibleRowReducer,deleteCarReducer,addCarReducer,changeCarReducer,errorReducer})