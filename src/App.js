import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ListOfInvoices from "./components/listOfInvoices";
import TransactionList from "./components/transactionsList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h3>Employees to track their Income</h3>
        <Routes>
          <Route path="/" element={<TransactionList />} />
          <Route path="/invoices" element={<ListOfInvoices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
