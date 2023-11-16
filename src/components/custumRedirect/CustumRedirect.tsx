import { useSelector } from "react-redux"
import { RootStateType } from "../../configureStore"
import { Redirect } from "react-router"

const CustumRedirect=()=>{
    const redirect=useSelector((state:RootStateType)=>state.redirectReducer)
    return redirect?(
        <Redirect to={redirect}/>
    ):null;
}
export default CustumRedirect;