import { useSelector } from "react-redux";

import Bacground from "../common/bacground/Bacground"
import ErrorBackdrop from "../components/errors/ErrorBackdrop";
import LoginTemplate from "../components/login/LoginTemplate";

import { RootStateType } from "../configureStore";

const Login=()=>{
    const error=useSelector((state:RootStateType)=>state.errorReducer);
    return(
        <Bacground>
            <LoginTemplate/>
            {error&& <ErrorBackdrop message={error}/>}
        </Bacground>
    )
}
export default Login;