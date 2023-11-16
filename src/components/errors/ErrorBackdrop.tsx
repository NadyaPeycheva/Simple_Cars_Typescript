import { useDispatch } from "react-redux";

import { Backdrop } from "@mui/material";

import { errorAction } from "./errorAction";

const ErrorBackdrop:React.FC<{message:string}> = ({message}) => {
  const dispatch=useDispatch()
  const handleClose = () => {
dispatch(errorAction())
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
