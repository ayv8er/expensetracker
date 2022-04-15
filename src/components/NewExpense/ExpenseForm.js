import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { setExpenses, setIsShownForm, setErrorMsg } = props;
  const [isValid, setIsValid] = useState({
    title: true,
    amount: true,
    date: true,
  });
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleTitleChange = (event) => {
    setIsValid((prevState) => {
      return { ...prevState, title: true };
    });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const handleAmountChange = (event) => {
    setIsValid((prevState) => {
      return { ...prevState, amount: true };
    });
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const handleDateChange = (event) => {
    setIsValid((prevState) => {
      return { ...prevState, date: true };
    });
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const handleClick = () => {
    setIsShownForm(false);
  };

  const handleSubmit = (event) => {
    let isSubmittable = true;
    event.preventDefault();
    if (userInput.title.trim().length === 0) {
      isSubmittable = false;
      setErrorMsg((prevState) => {
        return {
          ...prevState,
          title: true,
          errorToggle: true,
        };
      });
      setIsValid((prevState) => {
        return { ...prevState, title: false };
      });
    }
    if (userInput.amount.trim().length === 0) {
      isSubmittable = false;
      setErrorMsg((prevState) => {
        return {
          ...prevState,
          amount: true,
          errorToggle: true,
        };
      });
      setIsValid((prevState) => {
        return { ...prevState, amount: false };
      });
    }
    if (!userInput.date) {
      isSubmittable = false;
      setErrorMsg((prevState) => {
        return {
          ...prevState,
          date: true,
          errorToggle: true,
        };
      });
      setIsValid((prevState) => {
        return { ...prevState, date: false };
      });
    }
    if (isSubmittable) {
      const expenseData = {
        id: (Math.random() * Math.random()).toString(),
        title: userInput.title,
        amount: +userInput.amount,
        date: new Date(userInput.date),
      };
      setExpenses((prevState) => {
        return [expenseData, ...prevState];
      });
      setUserInput({
        title: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div
          className={`new-expense__control ${isValid.title ? "" : "invalid"}`}
        >
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={handleTitleChange}
          />
        </div>
        <div
          className={`new-expense__control ${isValid.amount ? "" : "invalid"}`}
        >
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={handleAmountChange}
          />
        </div>
        <div
          className={`new-expense__control ${isValid.date ? "" : "invalid"}`}
        >
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
        <button type="button" onClick={handleClick}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
