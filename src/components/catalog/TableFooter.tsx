import { Box, IconButton, TableFooter, TablePagination, TableRow } from "@mui/material";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { CarDataType } from "../../types/types";
type PropsType={
  
   count:number, page:number, rowsPerPage:number, onPageChange:(e: React.MouseEvent<HTMLButtonElement>,n:number) => void
}
function TablePaginationActions(props:PropsType){
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
 
  
  TablePaginationActions.propTypes= {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const TFooter:React.FC<{cars:CarDataType[],handleChangePage:(e:unknown,page:number)=>void,handleChangeRowsPerPage:(e:React.ChangeEvent<HTMLInputElement>)=>void,page:number,rowsPerPage:number}>=({cars,handleChangePage,handleChangeRowsPerPage,page,rowsPerPage})=>{

    return(
        <TableFooter>
            <TableRow>
                <TablePagination rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={13}
              count={cars.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              />
            </TableRow>
        </TableFooter>
    )
}
export default TFooter;