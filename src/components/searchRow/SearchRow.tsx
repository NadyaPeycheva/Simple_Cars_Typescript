import { AddBox, Close, Search } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { visibleAddRow } from "../addCarRow/visibleAddCarRowAction";

import "./SearchRowStyle.scss";

const SearchRow:React.FC<{username:string,onFilterCars:(value:string)=>void}> = ({username, onFilterCars }) => {
  const dispatch=useDispatch();
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    onFilterCars(inputValue)
  },[inputValue])

  const clearInput = () => {
    setInputValue("");
  };

  const inputValueHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value);
  };

  const addCarRowHandler=()=>{
dispatch(visibleAddRow())
  }
  

  return (
    <div className="searchContainer">
      <h4>SIMPLE CARS</h4>
      <div className="btnsBox">
        <Input
          onChange={inputValueHandler}
          value={inputValue}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end" sx={{ mr: 2 }}>
              <Close onClick={clearInput} />
            </InputAdornment>
          }
        />
        {username&&<AddBox onClick={addCarRowHandler}/>}
      </div>
    </div>
  );
};
export default SearchRow;
