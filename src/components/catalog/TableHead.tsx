import { TableCell, TableHead, TableRow } from "@mui/material";

import { tableTitleColumns } from "../../common/tableTitleColumns";

const THead:React.FC<{username:string}> = ({username}) => {
  return (
    <TableHead>
      <TableRow>
        {username&&<TableCell sx={{fontWeight:'bold'}}>Action</TableCell>}
        {tableTitleColumns.map((element) => (
          <TableCell key={element.title} component="th" scope="row" sx={{fontWeight:'bold'}}>
            {element.title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
export default THead;
