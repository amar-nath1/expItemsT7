import Expenses from "./Components/Expenses/Expenses";
import Addexpense from "./Components/AddExpenseForm/Addexpense";

const App=() =>{
 
  return (
    <div>
      <Addexpense></Addexpense>
      <h1>Expense Items</h1>

      <Expenses></Expenses>

      
      
    </div>
  );
}

export default App;
