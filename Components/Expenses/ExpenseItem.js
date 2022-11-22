import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'



const ExpenseItem=(props) =>{



    return (
        <li>
        <Card className="expense-item">

            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails> 
            
        </Card>

        </li>

    )
}

export default ExpenseItem