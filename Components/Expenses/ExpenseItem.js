import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'


const ExpenseItem=(props) =>{
function clickHandler(e){
e.target.parentElement.remove()
    
}

    return (
        <>
        <Card className="expense-item">

            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
            <button onClick={clickHandler}>Delete Expense</button>
            
        </Card>


</>
    )
}

export default ExpenseItem