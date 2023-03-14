import { useSelector } from "react-redux";

import Bacground from "../common/bacground/Bacground";
import ErrorBackdrop from "../components/errors/ErrorBackdrop";
import RegisterTemplate from "../components/register/RegisterTemplate";

import { RootStateType } from "../configureStore";

const Register = () => {
  const error = useSelector((state:RootStateType) => state.errorReducer);
  return (
    <Bacground>
      <RegisterTemplate />
      {error && <ErrorBackdrop message={error} />}
    </Bacground>
  );
};
export default Register;
