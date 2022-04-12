import { useState } from "react";

import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState("");

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        setFilteredYear={setFilteredYear}
      />
      {items.map((item, index) => (
        <ExpenseItem item={item} key={index} />
      ))}
    </Card>
  );
};

export default Expenses;
