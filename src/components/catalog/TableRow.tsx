import { TableCell, TableRow } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { deleteCar } from "./carActions";
import { useDispatch } from "react-redux";
import ChangeRow from "../changeRow/ChangeRow";
import { useState } from "react";

import { UserType } from "../../types/types";
import { CarDataType } from "../../types/types";

const TRow:React.FC<{user:UserType,car:CarDataType}> = ({ user, car }) => {
  const dispatch = useDispatch();

  const [changeRowVisible, setChangeRowVisible] = useState(false);

  const deleteCarHandler = () => {
    dispatch(deleteCar(car.id, user.id, user.token));
  };

  const changeCarRowVisible = () => {
    setChangeRowVisible(true);
  };
  const changeCarRowUnvisible = () => {
    setChangeRowVisible(false);
  };
  const UserIcons:React.FC<{userId:string,carId:string}> = ({ userId, carId }) => {
    return (
      <>
        {userId === carId ? (
          <TableCell>
            <CreateIcon
              onClick={changeCarRowVisible}
              sx={{ fontSize: "19px", color: "black" }}
            />
            <DeleteOutlineIcon
              onClick={deleteCarHandler}
              sx={{ fontSize: "19px", color: "black" }}
            />
          </TableCell>
        ) : (
          <TableCell></TableCell>
        )}
      </>
    );
  };

  return (
    <>
      <TableRow key={car.id}>
        {user.username && (
          <UserIcons userId={user.id} carId={car.user.id} />
        )}
        <TableCell>{car.make}</TableCell>
        <TableCell>{car.model}</TableCell>
        <TableCell>{car.year}</TableCell>
        <TableCell>{car.engineType}</TableCell>
        <TableCell>{car.gearBox}</TableCell>
        <TableCell>{car.condition}</TableCell>
        <TableCell>{car.horsePower}</TableCell>
        <TableCell>{car.color}</TableCell>
        <TableCell>{car.price}</TableCell>
        <TableCell>{car.city}</TableCell>
        <TableCell>{car.mileage}</TableCell>
        <TableCell>{car.extras}</TableCell>
      </TableRow>
      {changeRowVisible && (
        <ChangeRow
          car={car}
          userId={user.id}
          token={user.token}
          changeCarRowUnvisible={changeCarRowUnvisible}
        />
      )}
    </>
  );
};
export default TRow;
