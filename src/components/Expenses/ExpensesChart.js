import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const { filteredItems } = props;

  const chartDataPoints = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  if (filteredItems.length === 0) {
    return;
  } else {
    for (const expense of filteredItems()) {
      const expenseMonth = expense.date.getMonth();
      chartDataPoints[expenseMonth].value += expense.amount;
    }
  }

  return <Chart chartDataPoints={chartDataPoints} />;
};

export default ExpensesChart;
