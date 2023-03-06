import { useSelector } from "react-redux";
import Bacground from "../common/bacground/Bacground";
import ErrorBackdrop from "../components/errors/ErrorBackdrop";
import RegisterTemplate from "../components/register/RegisterTemplate";

const Register = () => {
  const error = useSelector((state:any):string => state.errorReducer);
  return (
    <Bacground>
      <RegisterTemplate />
      {error && <ErrorBackdrop message={error} />}
    </Bacground>
  );
};
export default Register;
