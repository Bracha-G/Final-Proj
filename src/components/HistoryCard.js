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
            <th>
              {props.title1}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                  stroke="#90A3BF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </th>
            <th>
              {props.title2}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                  stroke="#90A3BF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </th>
            <th>
              {props.title3}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                  stroke="#90A3BF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </th>
            <th>
              {props.title4}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                  stroke="#90A3BF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </th>
          </tr>
          {props.children}
        </tbody>
      </table>
      <div class="footer-container ">
        <Button buttonTitle={"See More.."} class={"btn btn-white "}></Button>
      </div>
    </>
  );
}

export default HistoryCard;
