import logo from "./logo.svg";
import "./App.css";
import TransactionList from "./components/transactionsList";

function App() {
  return (
    <div className="App">
      Employees to track their Income
      <TransactionList />
    </div>
  );
}

export default App;
