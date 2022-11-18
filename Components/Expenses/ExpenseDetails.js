import './ExpenseItem.css'

const ExpenseDetails=(props)=>{


    return (

        <div className="expense-item__description"> 
            
            <h2>{props.title}</h2>
            <h3>{props.location}</h3>
            <div className="expense-item__price">Rs. {props.amount}</div>
            
            </div>
    )

}

export default ExpenseDetails