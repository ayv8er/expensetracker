import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const { setExpenses, setErrorMsg } = props;
  const [isShownForm, setIsShownForm] = useState(false);

  const handleClick = () => {
    setIsShownForm(true);
  };

  return (
    <div className="new-expense">
      {!isShownForm && <button onClick={handleClick}>Add New Expense</button>}
      {isShownForm && (
        <ExpenseForm
          setExpenses={setExpenses}
          setIsShownForm={setIsShownForm}
          setErrorMsg={setErrorMsg}
        />
      )}
    </div>
  );
};

export default NewExpense;
