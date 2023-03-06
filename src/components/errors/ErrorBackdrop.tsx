import { Backdrop } from "@mui/material";
import { useDispatch } from "react-redux";

const ErrorBackdrop:React.FC<{message:string}> = ({message}) => {
  const dispatch=useDispatch()
  const handleClose = () => {
dispatch({type:"REMOVE_ERROR"})
  };
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      onClick={handleClose}
    >{message}</Backdrop>
  );
};
export default ErrorBackdrop;
