import './expense.css';

const Expense = props =>{
    const expenseDate = props.expense_date;
    const year = expenseDate.getFullYear();
    const date = expenseDate.getDate();
    const month = expenseDate.toLocaleString("en-US",{"month":"long"});
    return ( 
            <div className="row back-ground">
                <div className="col-3">
                    <span className="small">{month}<b>{date}</b>, {year}</span><br></br>
                </div>
                <div className="col-6">{props.expense_type}</div>
                <div className="col-3">{props.expense}</div>
            </div>
    )
}

export default Expense;