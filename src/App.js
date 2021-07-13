import logo from './logo.svg';
import './App.css';
import ExpenseManager from './Components/expenses/expenses/expense_manager';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <ExpenseManager></ExpenseManager>
    </div>
  );
}

export default App;
