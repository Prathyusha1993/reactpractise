import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import invoices from "../listOfInvoices.json";
import CreateInvoice from "./createInvoice";

const ListOfInvoices = () => {
  const [clientName, setClientName] = useState("");
  const [dateCreation, setDateCreation] = useState("");
  const [referenceNum, setReferenceNum] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleClientName = (e) => {
    e.preventDefault();
    setClientName(e.target.value);
  };
  const handleDateCreation = (e) => {
    e.preventDefault();
    setDateCreation(e.target.value);
  };
  const handleReferenceNum = (e) => {
    e.preventDefault();
    setReferenceNum(e.target.value);
  };
  const handleAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  const handleStatus = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };
  //   const handleSubmit = () => {};

  return (
    <div>
      <h4>This shows list of invoices</h4>
      <div>
        <CreateInvoice
          clientName={clientName}
          dateCreation={dateCreation}
          referenceNum={referenceNum}
          amount={amount}
          status={status}
          handleClientName={handleClientName}
          handleDateCreation={handleDateCreation}
          handleReferenceNum={handleReferenceNum}
          handleAmount={handleAmount}
          handleStatus={handleStatus}
        />
      </div>
      <div>
        <TableContainer
          component={Paper}
          style={{ border: ".2px solid black", margin: "15px" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Client Name</TableCell>
                <TableCell align="right">Date Creation</TableCell>
                <TableCell align="right">Reference Number</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Invoice Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((row) => (
                <TableRow
                  key={row.clientName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.clientName}
                  </TableCell>
                  <TableCell align="right">{row.dateCreation}</TableCell>
                  <TableCell align="right">{row.referenceNum}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ListOfInvoices;
