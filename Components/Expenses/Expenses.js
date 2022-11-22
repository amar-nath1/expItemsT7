import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";

import React,{ useState } from "react";


import Card from "../UI/Card";
const Expenses = (props) => {

  const [filteredYear,setFilterYear]=useState('2020')
  

const filterChangeHandler=(selectedYear)=>{

  setFilterYear(selectedYear)
  
}





  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {props.items.map((exp)=>(

        <ExpenseItem key={exp.key} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>

      ))}
    </Card>
      )
}

export default Expenses