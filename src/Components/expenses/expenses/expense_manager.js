// display expenses from list of expenses.

// will have array of values and from that values we'll generate expense.

import './expense.css';
import {useState} from 'react';
import Expense from './expense';

const ExpenseManager = props =>{
    const [expenseObj, createExpense] = useState({
        "expense_date" : new Date().toISOString().split("T")[0],
        "expense_type" : "",
        "expense" : ""
    });
    // array of expense
    const [expenseObjArray, addExpenseObj] = useState([
                                                {
                                                    "expense-date":new Date(2021,7,12),
                                                    "expense_type":"Cooker Expense",
                                                    "expense": 1800.0
                                                },
                                                {
                                                    "expense-date":new Date(2019,7,1),
                                                    "expense_type":"Laptop Expense",
                                                    "expense": 63000.0
                                                }
                                            ]);

    
    const [expenseComponentArray, addExpenseComponent] = useState(expenseObjArray.filter(e => e['expense-date'].getFullYear() == new Date().getFullYear()).map(
        element =>{
            console.log(element);
            return <Expense expense_date = {element['expense-date']} expense_type = {element['expense_type']} 
            expense={element['expense']}></Expense>
        }
    ));
   
    return (
        <div className="container">
            <div>{expenseComponentArray}</div>
        </div>
    )
}

const expenseAdd = event =>{

}
// manage states

// add expense

// filter

// show expenses

export default ExpenseManager;