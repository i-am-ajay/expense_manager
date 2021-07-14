import './add_expense.css'

const AddExpense = props =>{
    return (
        <div className="m-1">
            <div className="row p-1">
                <div className="col-3"><input id="e_date" className="form-control form-control-sm" type="date" value={props.expense_obj.expense_date} onChange={props.object_creater }/></div>
                <div className="col-4"><input id="e_type" className="form-control form-control-sm" type="text" value={props.expense_obj.expense_type} onChange={props.object_creater } 
                    placeholder="Type of Expense"/></div>
                <div className="col-3"><input id="exp" className="form-control form-control-sm" type="text" value={props.expense_obj.expense} onChange={props.object_creater} 
                    placeholder="Expense"/></div>
                <div className="col-2"><button className="btn btn-sm btn-outline-danger" onClick={props.add_handler}>Add Expense</button></div>
            </div>
        </div>
    );
}

export default AddExpense;