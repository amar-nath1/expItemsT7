import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

import Card from "../UI/Card";
const Expenses=()=>{

    let expense=[
        {date: new Date(2013,5,10),
        title: 'Edibles',
      amount: 4000,
    location: 'Noida'},
    {date: new Date(2014,3,13),
      title: 'Travel',
    amount: 6000,
    location: 'Pune'},
    {date: new Date(2016,1,23),
      title: 'Grocery',
    amount: 1000,
    location: 'CP'},
    {date: new Date(2013,5,10),
      title: 'Gym',
    amount: 4000,
    location: 'Atta'},
      ]
    
    let a=[]
      for (var i=0;i<4;i++){ //here we can write i can also be less than 100 to show 100 times.
      a.push(<ExpenseItem date={expense[i].date} title={expense[i].title} amount={expense[i].amount} location={expense[i].location}></ExpenseItem>)
      }

      return (
        <Card className='expenses'>{a}</Card>
      )
}

export default Expenses