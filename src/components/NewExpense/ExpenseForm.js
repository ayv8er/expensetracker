import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleTitleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const handleAmountChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const handleDateChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      id: (Math.random() * Math.random()).toString(),
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    console.log(expenseData);
    props.setExpenses((prevState) => {
      return [...prevState, expenseData];
    });
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
