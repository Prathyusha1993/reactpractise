import React from "react";

const CreateInvoice = ({
  clientName,
  dateCreation,
  referenceNum,
  amount,
  status,
  handleClientName,
  handleDateCreation,
  handleReferenceNum,
  handleAmount,
  handleStatus,
  handleSubmit,
}) => {
  return (
    <div>
      {/* <h4>Create Invoices</h4> */}
      <form>
        <label style={{ fontSize: "14px" }}>ClientName</label>
        <input
          style={{
            marginLeft: "4px",
            marginRight: "7px",
            borderRadius: "4px",
            border: "0.5px solid balck",
          }}
          type="text"
          value={clientName}
          onChange={handleClientName}
        />
        <label style={{ fontSize: "14px" }}>DateCreation</label>
        <input
          style={{
            marginLeft: "4px",
            marginRight: "7px",
            borderRadius: "4px",
            border: "0.5px solid balck",
          }}
          type="text"
          value={dateCreation}
          onChange={handleDateCreation}
        />
        <label style={{ fontSize: "14px" }}>referenceNum</label>
        <input
          style={{
            marginLeft: "4px",
            marginRight: "7px",
            borderRadius: "4px",
            border: "0.5px solid balck",
          }}
          type="text"
          value={referenceNum}
          onChange={handleReferenceNum}
        />
        <label style={{ fontSize: "14px" }}>amount</label>
        <input
          style={{
            marginLeft: "4px",
            marginRight: "7px",
            borderRadius: "4px",
            border: "0.5px solid balck",
          }}
          type="text"
          value={amount}
          onChange={handleAmount}
        />
        <label style={{ fontSize: "14px" }}>status</label>
        <input
          style={{
            marginLeft: "4px",
            marginRight: "7px",
            borderRadius: "4px",
            border: "0.5px solid balck",
          }}
          type="text"
          value={status}
          onChange={handleStatus}
        />
        <button
          style={{ color: "black", backgroundColor: "lightgreen" }}
          onClick={handleSubmit}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateInvoice;
