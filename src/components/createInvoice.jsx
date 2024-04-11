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
}) => {
  return (
    <div>
      <h4>Create Invoices</h4>
      <form>
        <span>ClientName</span>
        <input type="text" value={clientName} onChange={handleClientName} />
        <span>DateCreation</span>
        <input type="text" value={dateCreation} onChange={handleDateCreation} />
        <span>referenceNum</span>
        <input type="text" value={referenceNum} onChange={handleReferenceNum} />
        <span>amount</span>
        <input type="text" value={amount} onChange={handleAmount} />
        <span>status</span>
        <input type="text" value={status} onChange={handleStatus} />
        {/* <button onClick={handleSubmit}> Submit</button> */}
      </form>
    </div>
  );
};

export default CreateInvoice;
