import { Link } from "react-router-dom"

import"./LoginButtonStyles.scss"
const LoginButton=()=>{
    return(
        <Link to='/login' className='loginButton'>Login</Link>
    )
}
export default LoginButton;