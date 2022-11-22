import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";

import React,{ useState } from "react";


import Card from "../UI/Card";
const Expenses = (props) => {

  const [filteredYear,setFilterYear]=useState('All')
  

const filterChangeHandler=(selectedYear)=>{

  setFilterYear(selectedYear)
  
}

let filteredItems=props.items.filter((exp)=>{

  return exp.date.getFullYear().toString()===filteredYear
})

let arrToShow

if (filteredYear==='All'){
  arrToShow=props.items
}
else{arrToShow=filteredItems}

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {arrToShow.map((exp)=>(

        <ExpenseItem key={exp.key} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>

      ))}
    </Card>
      )
}

export default Expenses