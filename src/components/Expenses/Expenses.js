import { useState } from "react";

import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState("");

  const filteredItems = () => {
    if (!filteredYear) {
      return items;
    } else {
      return items.filter((item) => item.date.getFullYear() === +filteredYear);
    }
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        setFilteredYear={setFilteredYear}
      />
      <ExpensesList filteredItems={filteredItems} />
    </Card>
  );
};

export default Expenses;
