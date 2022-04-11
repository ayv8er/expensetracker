import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm setExpenses={props.setExpenses} />
    </div>
  );
};

export default NewExpense;
