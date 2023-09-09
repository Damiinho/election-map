import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DoughnutDescription = (props) => {
  const createData = (name, result, seats) => {
    return { name, result, seats };
  };

  const rows = props.finalResult.map((item) =>
    createData(item.name, item.result, item.seats)
  );

  const tableCellStyle = {
    backgroundColor: "#f7f7f7",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    maxWidth: "500px",
    margin: "0 auto",
  };

  const tableHeaderCellStyle = {
    backgroundColor: "#333",
  };

  const tableHeaderCellTextStyle = {
    color: "white",
    fontWeight: "bold",
  };

  const tableRowStyle = {
    "&:last-child td, &:last-child th": { border: 0 },
  };

  const tableCellStyleInner = {
    padding: "10px",
    borderBottom: "1px solid #ccc",
  };

  return (
    <TableContainer component={Paper} style={tableCellStyle}>
      <Table size="small" aria-label="a dense table">
        <TableHead style={tableHeaderCellStyle}>
          <TableRow>
            <TableCell style={tableHeaderCellTextStyle}>Nazwa</TableCell>
            <TableCell align="right" style={tableHeaderCellTextStyle}>
              Wynik
            </TableCell>
            <TableCell align="right" style={tableHeaderCellTextStyle}>
              Miejsca
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} style={tableRowStyle}>
              <TableCell component="th" scope="row" style={tableCellStyleInner}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={tableCellStyleInner}>
                {row.result}
              </TableCell>
              <TableCell align="right" style={tableCellStyleInner}>
                {row.seats}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DoughnutDescription;
