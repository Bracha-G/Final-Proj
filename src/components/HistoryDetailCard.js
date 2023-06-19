import { startTransition } from "react";
import "./HistoryDetailCard.css";

function HistoryDetailCard(props) {
  return (
    <>
      <tr>
        <div className="img">
          {props.children}
          <span className="text">{props.name}</span>
        </div>

        <td>{props.date}</td>
        <td>${props.amount}</td>
        <td>
          <span className="pic">{props.svg}</span>
          {props.detail}
        </td>
      </tr>
    </>
  );
}

export default HistoryDetailCard;
