import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

import Task11 from "./Task11";
const ExpenseItem=(props) =>{


    return (
        <>
        <Card className="expense-item">

            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
            <Task11 date={props.date}></Task11>
            
        </Card>


</>
    )
}

export default ExpenseItem