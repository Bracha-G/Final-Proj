import { startTransition } from "react";
import "./HistoryDetailCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

function HistoryDetailCard(props) {
  function ClickHandler() {
    props.onClick(props.id);
  }
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
          <span className="pic">
            <FontAwesomeIcon
              icon={props.svg}
              style={{ color: `${props.color}` }}
            ></FontAwesomeIcon>
          </span>
          {props.detail}
        </td>
        <td>
          {props.onClick && (
            <>
              <Button
                class={"btn-purple submit-btn"}
                buttonTitle={"Edit"}
              ></Button>
              <Button
                onClick={ClickHandler}
                class={"btn-purple submit-btn"}
                buttonTitle={"Delete"}
              ></Button>
            </>
          )}
        </td>
      </tr>
    </>
  );
}

export default HistoryDetailCard;
