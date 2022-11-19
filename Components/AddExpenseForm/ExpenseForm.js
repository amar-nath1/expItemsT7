
import './ExpenseForm.css'
import React, { useState } from 'react'

const ExpenseForm = () => {

    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')

    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value)

    }
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    }
    function showExpense(event){

        event.preventDefault()
        const obj={Title:enteredTitle,
        Amount:enteredAmount,
        Date:new Date(enteredDate).toLocaleDateString()}
        console.log(obj)
    }

    return (
        <form onSubmit={showExpense}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>

                    <label>Title</label>
                    <input id='title' type='text' onChange={titleChangeHandler}/></div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input id='amount' type='number' onChange={amountChangeHandler}></input></div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler}></input>
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button></div>
        </form>
    )

}

export default ExpenseForm