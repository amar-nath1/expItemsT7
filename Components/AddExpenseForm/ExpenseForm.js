
import './ExpenseForm.css'
import React, { useState } from 'react'

const ExpenseForm = (props) => {

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
        const obj={key:Math.random().toFixed(3)*100,
            title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)}
        props.formData(obj)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={showExpense}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>

                    <label>Title</label>
                    <input id='title' type='text' value={enteredTitle} onChange={titleChangeHandler} required/></div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input id='amount' type='number' value={enteredAmount} onChange={amountChangeHandler} required></input></div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} required></input>
                </div>

            </div>
            <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Submit</button></div>
        </form>
    )

}

export default ExpenseForm