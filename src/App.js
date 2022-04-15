import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const App = () => {
  const [errorMsg, setErrorMsg] = useState({
    title: false,
    amount: false,
    date: false,
    errorToggle: false,
  });
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const errorTitles = [
    "Missing Title",
    "Missing Amount",
    "Missing Date",
    "Missing Title and Amount",
    "Missing Title and Date",
    "Missing Amount and Date",
    "Missing Title, Amount and Date",
  ];
  const errorMessages = [
    "Please enter the title of the expense.",
    "Please enter the amount of the expense.",
    "Please enter the date of the expense.",
    "Please enter the title and amount of the expense.",
    "Please enter the title and date of the expense.",
    "Please enter the amount and date of the expense.",
    "Please enter the title, amount and date of the expense.",
  ];

  let modalTitle;
  let modalMessage;

  if (errorMsg.title && !errorMsg.amount && !errorMsg.date) {
    modalTitle = errorTitles[0];
    modalMessage = errorMessages[0];
  } else if (!errorMsg.title && errorMsg.amount && !errorMsg.date) {
    modalTitle = errorTitles[1];
    modalMessage = errorMessages[1];
  } else if (!errorMsg.title && !errorMsg.amount && errorMsg.date) {
    modalTitle = errorTitles[2];
    modalMessage = errorMessages[2];
  } else if (errorMsg.title && errorMsg.amount && !errorMsg.date) {
    modalTitle = errorTitles[3];
    modalMessage = errorMessages[3];
  } else if (errorMsg.title && !errorMsg.amount && errorMsg.date) {
    modalTitle = errorTitles[4];
    modalMessage = errorMessages[4];
  } else if (!errorMsg.title && errorMsg.amount && errorMsg.date) {
    modalTitle = errorTitles[5];
    modalMessage = errorMessages[5];
  } else if (errorMsg.title && errorMsg.amount && errorMsg.date) {
    modalTitle = errorTitles[6];
    modalMessage = errorMessages[6];
  }

  return (
    <div>
      {errorMsg.errorToggle && (
        <ErrorModal
          modalTitle={modalTitle}
          modalMessage={modalMessage}
          setErrorMsg={setErrorMsg}
        />
      )}
      <NewExpense setExpenses={setExpenses} setErrorMsg={setErrorMsg} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
