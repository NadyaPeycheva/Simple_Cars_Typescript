import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { logout } from "../../login/loginAction";

import "./ButtonStyles.scss";

const UserButton: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    title === "Login" ? history.push(link) : dispatch(logout());
  };
  return (
    <button onClick={onClickHandler} className="button">
      {title}
    </button>
  );
};
export default UserButton;
