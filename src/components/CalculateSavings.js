import React from 'react';
import { useState } from 'react';


function CalculateSavings(){
    const [budget, setBudget] = useState('');
    const [expenses, setExpenses] = useState('');
    var amt = budget-expenses;

    const handleBudget = (event) => {
        setBudget(event.target.value);
  };

    const handleExpense = (event) => {
        setExpenses(event.target.value);
  };

  return (
    <div>
      <h2>Saving After Expenses</h2>
      <label>Budget</label>
      <input type="number" onChange={handleBudget} value={budget}  />
      <label>Expense</label>
      <input type="number" onChange={handleExpense} value={expenses} />
      <br></br>
      <br></br>
      <label>Amount</label>
      <input type="number" value={amt} />
    </div>
  );
};

export default CalculateSavings;
