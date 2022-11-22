import Expenses from "./Components/Expenses/Expenses";
import Addexpense from "./Components/AddExpenseForm/Addexpense";
import React, {useState} from "react";

const App=() =>{

  let expense = [
    { key:'e1',
      title: 'Edibles',
      amount: '4000',
      date: new Date('2019-5-10')

    },
    {key:'e2',
      title: 'Travel',
      amount: '6000',
      date: new Date('2021-3-13')

    },
    {key:'e3',
      title: 'Grocery',
      amount: '1000',
      date: new Date('2021-1-23')

    },
    {key:'e4',
      title: 'Gym',
      amount: '4000',
      date: new Date('2020-5-10')

    },
  ]

  const [expArr,setExpArr]=useState(expense)

  const getNewExpData= newData=>{
 
    setExpArr((prev)=>{

      return [...prev,newData]

    })
    
  }


  return (
    <div>
      <Addexpense newExpData={getNewExpData}></Addexpense>
      
      <Expenses items={expArr}></Expenses>
      
    </div>
  );
}

export default App;
