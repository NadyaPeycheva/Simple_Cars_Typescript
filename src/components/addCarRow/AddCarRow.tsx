import { useDispatch } from "react-redux";
import { invisibleAddRow } from "./visibleAddCarRowAction";
import { useState } from "react";
import { addCar } from "../catalog/carActions";
import AdditionalRow from "../../common/AdditionalRow";

import { UserType } from "../../types/types";
import { CarDataType } from "../../types/types";

const initialData = {
  id: "",
  make: "",
  model: "",
  year: 0,
  engineType: "",
  gearBox: "",
  condition: "",
  horsePower:0,
  color: "",
  price: 0,
  city: "",
  mileage: 0,
  user:{id: '',
    username: '',
    firstName: '',
    lastName: '',
    password: null},
  extras: "",
};

const AddCarRow:React.FC<{user:UserType}> = ({ user }) => {
  const dispatch = useDispatch();

  const [inputCarData, setInputCarData] = useState(initialData);

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
    setInputCarData(initialData);
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
