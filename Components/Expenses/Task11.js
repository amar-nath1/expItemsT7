import React from "react";

import ExpenseDate from "./ExpenseDate";


const Task11=(props)=> {

    return React.createElement('div', { className: 'expense-item' },
        React.createElement(ExpenseDate, { date: props.date }),
        React.createElement('div', {}), React.createElement('h1', {}, 'Expense1'), React.createElement('h1', {}, 'Expense1')


    )

}

export default Task11