import "./PiChart.css";
import CategoryListItem from "./CategoryListItem";
import { PieChart } from "react-minimal-pie-chart";

function PiChart(props) {
  const categoryArr = [
    {
      categoryName: "Hachnasas Kallah",
      amount: "$8.000.00",
      className: "first",
    },
    {
      categoryName: "Helping the Poor",
      amount: "$2.130.00",
      className: "second",
    },
    {
      categoryName: "Medical Institusions",
      amount: "$1.510.00",
      className: "third",
    },
    {
      categoryName: "Torah Institusions",
      amount: "$2.245.00",
      className: "fourth",
    },
  ];
  return (
    <>
      <div className="pie-chart">
        <div className="my-pie-chart">
          <PieChart
            data={[
              { title: "One", value: 42.37, color: "#eb7ca6" },
              { title: "Two", value: 15.34, color: "#7c5cfc" },
              { title: "Three", value: 15.34, color: "#ffacc8" },
              { title: "Four", value: 26.21, color: "#cc6ff8" },
            ]}
          />
        </div>
      </div>
      <div className="overall-spending">
        <h4>Overall</h4>
        <span>$583,530.00</span>
      </div>
      <div>
        {categoryArr.map(function (categoryListItem) {
          return (
            <CategoryListItem
              categoryName={categoryListItem.categoryName}
              amount={categoryListItem.amount}
              className={categoryListItem.className}
            ></CategoryListItem>
          );
        })}
      </div>
    </>
  );
}

export default PiChart;
