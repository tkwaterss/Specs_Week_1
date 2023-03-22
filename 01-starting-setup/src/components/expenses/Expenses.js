import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const getFilterYearHandler = (year) => {
    setYear(year);
  };

  let expensesFilter = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onGetFilterYear={getFilterYearHandler}
        />
        <ExpensesList expenses={expensesFilter} />
      </Card>
    </div>
  );
};

export default Expenses;
