import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const { chartDataPoints } = props;
  const dataPointsValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          value={dataPoint.value}
          month={dataPoint.month}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
