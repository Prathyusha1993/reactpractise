import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import listInvoices from "../listOfInvoices.json";
import CreateInvoice from "./createInvoice";
import { ClickAwayListener, TextField } from "@mui/material";

const ListOfInvoices = () => {
  const [invoices, setInvoies] = useState(listInvoices);
  const [clientName, setClientName] = useState("");
  const [dateCreation, setDateCreation] = useState("");
  const [referenceNum, setReferenceNum] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      clientName,
      dateCreation,
      referenceNum,
      amount,
      status,
    };
    addRowsToTable(values);
    clearValuesAfterSubmit();
  };

  const clearValuesAfterSubmit = () => {
    setClientName("");
    setDateCreation("");
    setReferenceNum("");
    setAmount("");
    setStatus("");
  };

  const addRowsToTable = (data) => {
    // const totalInvoices = invoices.length;
    // data.id = totalInvoices + 1;
    const updatedInvoices = [...invoices];
    updatedInvoices.push(data);
    // console.log(updatedInvoices);
    setInvoies(updatedInvoices);
  };

  const handleTextFieldChange = (rowInd, colName, value) => {
    invoices[rowInd][colName] = value;
  };

  const handleExit = () => {
    setRowIndex(-1);
    setColumnIndex(-1);
  };

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
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        <ClickAwayListener onClickAway={() => handleExit()}>
          <TableContainer
            component={Paper}
            style={{ border: ".2px solid black", margin: "15px" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Client Name
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Date Creation
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Reference Number
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Amount
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Invoice Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map((row, index) => (
                  <TableRow
                    key={row.clientName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => {
                        setRowIndex(index);
                        setColumnIndex(0);
                      }}
                    >
                      {rowIndex === index && columnIndex === 0 ? (
                        <TextField
                          defaultValue={invoices[index]["clientName"]}
                          onChange={(e) =>
                            handleTextFieldChange(
                              index,
                              "clientName",
                              e.target.value
                            )
                          }
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleExit();
                            }
                          }}
                        />
                      ) : (
                        row.clientName
                      )}
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setRowIndex(index);
                        setColumnIndex(0);
                      }}
                      align="right"
                    >
                      {rowIndex === index && columnIndex === 0 ? (
                        <TextField
                          defaultValue={invoices[index]["dateCreation"]}
                          onChange={(e) =>
                            handleTextFieldChange(
                              index,
                              "dateCreation",
                              e.target.value
                            )
                          }
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleExit();
                            }
                          }}
                        />
                      ) : (
                        row.dateCreation
                      )}
                    </TableCell>
                    <TableCell align="right">{row.referenceNum}</TableCell>
                    <TableCell
                      onClick={() => {
                        setRowIndex(index);
                        setColumnIndex(0);
                      }}
                      align="right"
                    >
                      {rowIndex === index && columnIndex === 0 ? (
                        <TextField
                          defaultValue={invoices[index]["amount"]}
                          onChange={(e) =>
                            handleTextFieldChange(
                              index,
                              "amount",
                              e.target.value
                            )
                          }
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleExit();
                            }
                          }}
                        />
                      ) : (
                        row.amount
                      )}
                    </TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default ListOfInvoices;
