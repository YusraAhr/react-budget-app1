import React from 'react';
import ExpenseItem from './ExpenseItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseList = () => {
  const expenses = [
    { id: 12321312, name: 'shopping', cost: 50 },
    { id: 1232652, name: 'Holiday', cost: 300 },
    { id: 187321312, name: 'transportation', cost: 70 },
    { id: 12391312, name: 'Fuel', cost: 40 },
    { id: 123022, name: 'Child Care', cost: 500 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};
export default ExpenseList;
