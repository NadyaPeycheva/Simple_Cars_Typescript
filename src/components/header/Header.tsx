import { useSelector } from 'react-redux';
import logo from '../../resources/cars.png'

import"./HeaderStyles.scss"
import LoginButton from './loginButton/LoginButoon';
import { RootStateType } from '../../configureStore';
const Header=()=>{
    const{username}=useSelector((state:RootStateType)=>state.loginUserReducer);
    return(
        <header className="header">
            <img src={logo} alt='cars logo'/>
            {!username&&<LoginButton/>}
        </header>
    )

}
export default Header;