import { TableBody, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import AddCarRow from "../addCarRow/AddCarRow";
import TRow from "./TableRow";

import { UserType } from "../../types/types";
import { CarDataType } from "../../types/types";
import { RootStateType } from "../../configureStore";

const TBody:React.FC<{user:UserType,cars:CarDataType[],rowsPerPage:number,page:number}> = ({user,cars,rowsPerPage,page}) => {
  const isVisible=useSelector((state:RootStateType)=>state.visibleRowReducer);
  
  return (
    <TableBody>
      {cars.length===0&&<TableRow ><TableCell sx={{ textAlign: "center", padding: '110px' }} colSpan={13}>No records to display</TableCell></TableRow>}
      {(rowsPerPage > 0
            ? cars.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : cars
          ).map((car) => (<TRow key={car.id} user={user} car={car}/>))}

      {isVisible&&<AddCarRow user={user}/>}
    </TableBody>
  );
};
export default TBody;
