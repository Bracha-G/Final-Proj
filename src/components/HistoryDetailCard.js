import "./HistoryDetailCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function HistoryDetailCard(props) {
  return (
    <>
      <tr>
        <div className="img">
          <FontAwesomeIcon icon={faCoins} />
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
