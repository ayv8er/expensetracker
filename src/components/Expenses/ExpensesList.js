import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { filteredItems } = props;

  return (
    <ul className="expenses-list">
      {filteredItems().length === 0 ? (
        <h2 className="expenses-list__fallback">
          No expenses for selected year.
        </h2>
      ) : (
        filteredItems().map((item) => <ExpenseItem item={item} key={item.id} />)
      )}
    </ul>
  );
};

export default ExpensesList;
