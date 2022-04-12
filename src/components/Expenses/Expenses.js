import { useState } from "react";

import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
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
      {filteredItems().length === 0 ? (
        <p>No expenses for selected year.</p>
      ) : (
        filteredItems().map((item) => <ExpenseItem item={item} key={item.id} />)
      )}
    </Card>
  );
};

export default Expenses;
