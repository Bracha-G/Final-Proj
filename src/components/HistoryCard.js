import "./HistoryCard.css";
import HistoryDetailCard from "./HistoryDetailCard";
import Button from "./Button";

function HistoryCard(props) {
  return (
    <>
      <div className="header-container">
        <h3 className="section-header">{props.headerName}</h3>
      </div>
      <table className="transaction-history">
        <tbody>
          <tr>
            <th>{props.title1}</th>
            <th>{props.title2}</th>
            <th>{props.title3}</th>
            <th>{props.title4}</th>
          </tr>
          {props.children}
        </tbody>
      </table>
      <div className="footer-container ">
        <Button buttonTitle={"See More.."} class={"btn btn-white "}></Button>
      </div>
    </>
  );
}

export default HistoryCard;
