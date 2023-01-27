import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../../dummy.json"

export default function ClientDashboard() {
    React.useEffect(()=>{
        fetch(data)
        .then(res=> res.json())
        .then(data=> console.log(data))
    })
  const tableTitle = [
    "Id",
    "User",
    "Location",
    "Waste Type",
    "Waste Amount",
    "Time",
    "Action",
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {tableTitle.map((title) => (
              <TableCell>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}
