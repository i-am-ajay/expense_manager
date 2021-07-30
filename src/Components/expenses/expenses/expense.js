import './expense.css';

const Expense = props =>{
    const expenseDate = new Date(props.expense_date);
    const year = expenseDate.getFullYear();
    const date = expenseDate.getDate();
    const month = expenseDate.toLocaleString("en-US",{"month":"long"});
    return ( 
            <div className="row back-ground m-1">
                <div className="col-3 text-start px-5">
                    <span className="small text">{month}<b> {date}</b>, {year}</span><br></br>
                </div>
                <div className="col-6 text-start px-5">{props.expense_type}</div>
                <div className="col-3 text-start px-5">{props.expense}</div>
            </div>
    )
}

export default Expense;