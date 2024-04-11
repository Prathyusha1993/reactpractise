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
        <label>ClientName</label>
        <input type="text" value={clientName} onChange={handleClientName} />
        <label>DateCreation</label>
        <input type="text" value={dateCreation} onChange={handleDateCreation} />
        <label>referenceNum</label>
        <input type="text" value={referenceNum} onChange={handleReferenceNum} />
        <label>amount</label>
        <input type="text" value={amount} onChange={handleAmount} />
        <label>status</label>
        <input type="text" value={status} onChange={handleStatus} />
        <button onClick={handleSubmit}> Submit</button>
      </form>
    </div>
  );
};

export default CreateInvoice;
