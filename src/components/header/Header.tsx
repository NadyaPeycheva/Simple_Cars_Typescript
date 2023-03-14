import { useSelector } from 'react-redux';

import UserButton from './button/Button';
import { RootStateType } from '../../configureStore';
import logo from '../../resources/cars.png';

import"./HeaderStyles.scss"

const Header =()=>{
    const{username}=useSelector((state:RootStateType)=>state.loginUserReducer);
   
    return(
        <header className="header">
            <img src={logo} alt='cars logo'/>
            {!username?<UserButton title={"Login"} link={'/login'}/>:<UserButton title={"Logout"} link={'/catalog'}/>}
        </header>
    )

}
export default Header;