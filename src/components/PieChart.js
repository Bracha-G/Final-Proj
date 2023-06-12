import "./PieChart.css";

function PieChart(props) {
  return (
    <>
      <div class="pie-chart">
        <div id="my-pie-chart"></div>
      </div>
      <div class="overall-spending">
        <h4>{props.title}</h4>
        <span>${props.amount}</span>
      </div>
    </>
  );
}

export default PieChart;
