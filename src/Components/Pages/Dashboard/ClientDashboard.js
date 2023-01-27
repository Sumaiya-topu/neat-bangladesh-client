import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import profile from "../../../assets/avatar.jpg";
import vector from "../../../assets/Vector.png";
import { Link } from "react-router-dom";

export default function ClientDashboard() {
  const tableTitle = [
    "Request Id",
    "Request User",
    "Location",
    "Waste Type",
    "Waste Amount",
    "Time",
    "Payment",
    "Action",
  ];
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <img className="w-40 mx-auto" src={profile} alt="" />
          <p className="font-bold text-xl text-center mt-5">
            {" "}
            User name : WednesDay Adams{" "}
            <img className="inline" src={vector} alt="" />
          </p>
          <p className="text-xs font-semibold text-gray text-center">
            Email Address : name@mail.com
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/request-pickup" className=" mt-5">
          <button className=" bg-primary text-white py-2 px-10 ">
            Request Form
          </button>
        </Link>
      </div>
      <div className="mt-20">
        <h1 className="text-xl font-bold mb-5">Requested List</h1>
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
      </div>

      <div>
        <h1></h1>
      </div>
    </div>
  );
}
