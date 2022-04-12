import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const { setExpenses } = props;
  return (
    <div className="new-expense">
      <ExpenseForm setExpenses={setExpenses} />
    </div>
  );
};

export default NewExpense;
