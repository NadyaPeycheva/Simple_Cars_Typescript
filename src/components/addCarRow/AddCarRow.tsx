import { useState } from "react";
import { useDispatch } from "react-redux";

import { invisibleAddRow } from "./visibleAddCarRowAction";
import { addCar } from "../catalog/carActions";
import AdditionalRow from "../../common/AdditionalRow";

import { UserType } from "../../types/types";

import { initialCarData } from "./carData";

const AddCarRow:React.FC<{user:UserType}> = ({ user }) => {
  const dispatch = useDispatch();

  const [inputCarData, setInputCarData] = useState(initialCarData);

  const removeRowHandler = () => {
    dispatch(invisibleAddRow());
  };

  const getValueHandler = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const key= target.name;
    const value= target.value;
    const newProp:Record<string,string> = {key:'' };
    newProp[key] = value;

    setInputCarData((state) => {
      return { ...state, ...newProp };
    });
  };

  const addCarHandler = () => {
    const userData = {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    };
    inputCarData.id = user.id;
    inputCarData.user = userData;
    dispatch(addCar(inputCarData, user.token));
    setInputCarData(initialCarData);
  };

  return (
    <AdditionalRow
      carData={inputCarData}
      aceptAction={addCarHandler}
      removeAction={removeRowHandler}
      getValueHandler={getValueHandler}
    />
  );
};
export default AddCarRow;
