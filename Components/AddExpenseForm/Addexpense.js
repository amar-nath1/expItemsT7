import Card from "../UI/Card"
import '../Expenses/Expenses.css'

import './AddExpense.css'


function Addexpense(){

    function seeConsole(e){
        console.log(e.target.value)
    }

    return (
        <Card className='expenses'>
        <form onChange={seeConsole}>
            <label>Title</label>
            <input type='text'></input>
            <label>Amount</label>
            <input type='number'></input>
            <label>Date</label>
            <input type='date'></input>
            <input type='submit' value='Add Expense'></input>

        </form>
        
        </Card>
    )
}

export default Addexpense