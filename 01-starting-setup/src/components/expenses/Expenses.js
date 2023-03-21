import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;

  const [year, setYear] = useState('2020');

  const getFilterYearHandler = (year) => {
    setYear(year);
    console.log(year);
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={year} onGetFilterYear={getFilterYearHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
};

export default Expenses;
