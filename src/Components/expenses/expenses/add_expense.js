import 'add_expense.css'

const AddExpense = props =>{
    return (
        <div className="row">
            <div className="col-3"><input type="date" value={props.expense_date} onChange={}/></div>
            <div className="col-6"><input type="text" value={props.expense_type} onChange={} 
                placeholder="Type of Expense"/></div>
            <div className="col-3"><input type="text" value={props.expense} onChange={} 
                placeholder="Expense"/></div>
        </div>
    );
}

export default AddExpense;