import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import { TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Table } from "@mui/material";

import TBody from "./TableBody";
import TFooter from "./TableFooter";
import THead from "./TableHead";
import SearchRow from "../searchRow/SearchRow";

import { getCars } from "../../components/catalog/carActions";

import { CarDataType } from "../../types/types";
import { RootStateType } from "../../configureStore";

const CatalogTable = () => {
  const dispatch = useDispatch();

  const allCars = useSelector((state:RootStateType)=> state.getAllCarsReducer);
  const user=useSelector((state:RootStateType)=>state.loginUserReducer);
  const [filterCars, setFilterCars] = useState<CarDataType[]>([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
 useEffect(() => {
    dispatch(getCars());
  }, []);

  useEffect(() => {
    setFilterCars(allCars);
  },[allCars]);

  const filterCarsHandler = (inputValue:string) => {
    const filteredCars = allCars.filter((car) => {
      return (
        car.make.toLowerCase().includes(inputValue.toLowerCase()) ||
        car.model.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setFilterCars(filteredCars);
  };

  const handleChangePage = (event:unknown, newPage:number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event:React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt( event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <SearchRow username={user.username} onFilterCars={filterCarsHandler} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <THead username={user.username}/>
          <TBody user={user} cars={filterCars} rowsPerPage={rowsPerPage} page={page} />
          <TFooter
            cars={allCars}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
    </>
  );
};
export default CatalogTable;
