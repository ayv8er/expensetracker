import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;

  return (
    <Card className="expenses">
      {items.map((item, index) => (
        <ExpenseItem item={item} key={index} />
      ))}
    </Card>
  );
};

export default Expenses;
