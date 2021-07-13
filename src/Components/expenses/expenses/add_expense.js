import './add_expense.css'

const AddExpense = props =>{
    return (
        <div>
            <div className="row">
                <div className="col-3"><input type="date" value={props.expense_obj.expense_date} onChange={props.object_creater }/></div>
                <div className="col-6"><input type="text" value={props.expense_obj.expense_type} onChange={props.object_creater } 
                    placeholder="Type of Expense"/></div>
                <div className="col-3"><input type="text" value={props.expense_obj.expense} onChange={props.object_creater} 
                    placeholder="Expense"/></div>
            </div>
            <div>
                <button className="btn btn-primary" onClick={props.addExpenseHandler}>Add Expense</button>
            </div>
        </div>
    );
}

export default AddExpense;