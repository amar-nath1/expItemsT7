
import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {

    if (props.listItems.length === 0){
        return (<h2 className="expenses-list__fallback">Nothing to Show. Add some Expenses</h2>)
    }

    else if (props.listItems.length === 1) {

        let oneThing=props.listItems.map((exp) => (

            <ExpenseItem key={exp.key} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>

        ))
        return ([...oneThing,<p>Only single Expense here. Please add more...</p>])
            
        

    }
    else{


    return (
        <ul className="expenses-list">{
            props.listItems.map((exp) => (

                <ExpenseItem key={exp.key} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>

            ))}

        </ul>

    )
            }
}

export default ExpenseList