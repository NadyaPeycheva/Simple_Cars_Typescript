import { useSelector } from 'react-redux';
import logo from '../../resources/cars.png'

import"./HeaderStyles.scss"
import LoginButton from './loginButton/LoginButoon';
import { UserType } from '../../types/types';
const Header=()=>{
    const{username}=useSelector((state:any):UserType=>state.loginUserReducer);
    return(
        <header className="header">
            <img src={logo} alt='cars logo'/>
            {!username&&<LoginButton/>}
        </header>
    )

}
export default Header;