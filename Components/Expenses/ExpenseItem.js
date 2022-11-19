import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import React, { useState } from 'react'


const ExpenseItem=(props) =>{
const [title,setTitle]=useState(props.title)
const [amt,setAmt]=useState(props.amount)
function clickHandler(){
setTitle('updated')
setAmt(1000)
    
}

    return (
        <>
        <Card className="expense-item">

            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={title} amount={amt} location={props.location}></ExpenseDetails>
            <button onClick={clickHandler}>Delete Expense</button>
            
        </Card>


</>
    )
}

export default ExpenseItem