
import './AddExpense.css'
import ExpenseForm from './ExpenseForm'

import React,{useState} from 'react'

function Addexpense(props){

    const [showForm,setShowForm]=useState(false)

    const onFormData=dataObj=>{

        props.newExpData(dataObj)
        setShowForm(false)
        
    }

    const startEditingHandler=()=>{
        setShowForm(true)

    }

    const removeFormOnCancel=()=>{

        setShowForm(false)
    }
    

    return (
        <div className='new-expense'>
           {!showForm && <button onClick={startEditingHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm formData={onFormData} onCancel={removeFormOnCancel}></ExpenseForm>}
        </div>
        
    )
}

export default Addexpense