// display expenses from list of expenses.

// will have array of values and from that values we'll generate expense.

import './expense.css';
import {useState} from 'react';
import Expense from './expense';
import AddExpense from './add_expense';

const ExpenseManager = props =>{
    const [expenseObj, createExpense] = useState({
        "expense_date" : new Date().toISOString().split("T")[0],
        "expense_type" : "",
        "expense" : ""
    });
    // array of expense
    const [expenseObjArray, addExpenseObj] = useState([
                                                {
                                                    "expense_date":new Date(2021,7,12),
                                                    "expense_type":"Cooker Expense",
                                                    "expense": 1800.0
                                                },
                                                {
                                                    "expense_date":new Date(2019,7,1),
                                                    "expense_type":"Laptop Expense",
                                                    "expense": 63000.0
                                                }
                                            ]);

    
    const [expenseComponentArray, addExpenseComponent] = useState(expenseObjArray.filter(e => e['expense_date'].getFullYear() == new Date().getFullYear()).map(
        element =>{
            console.log(element);
            return <Expense expense_date = {element['expense_date']} expense_type = {element['expense_type']} 
            expense={element['expense']}></Expense>
        }
    ));

    /** Methods to handle various operation */
    const setExpenseObjectHandler = event =>{
        if(event.target.id === "e_date"){
            createExpense(prvState =>{
                return {...prvState,"expense_date":event.target.value};
            })
        }
        else if(event.target.id === "e_type"){
            createExpense(prvState =>{
                return {...prvState,"expense_type":event.target.value};
            })
        }
        else if(event.target.id === "exp"){
            createExpense( prvState =>{
                return {...prvState,"expense":event.target.value};
            }) 
        }
    }
    const addExpenseHandler = event =>{
        console.log(expenseObjArray);
        addExpenseObj(prvState =>{
            return [...prvState,expenseObj];
        });
        // if selected filter matches expense year then re render the expense on screen.
        addExpenseComponent(prvState =>{
            expenseObjArray.map(element =>{
                console.log(element);
                return <Expense expense_date = {element['expense_date']} expense_type = {element['expense_type']} 
                expense={element['expense']}></Expense>
            })
        })
    }
   
    return (
        <div className="container p-1 m-2 mx-auto">
            <AddExpense expense_obj = {expenseObj} object_creater = {setExpenseObjectHandler} add_handler={addExpenseHandler}></AddExpense>
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