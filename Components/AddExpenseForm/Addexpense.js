
import './AddExpense.css'
import ExpenseForm from './ExpenseForm'

function Addexpense(props){
    const onFormData=dataObj=>{

        props.newExpData(dataObj)
        
    }
    

    return (
        <div className='new-expense'>
            <ExpenseForm formData={onFormData}></ExpenseForm>
        </div>
        
    )
}

export default Addexpense