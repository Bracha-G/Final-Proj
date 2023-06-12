import "./DisplayAmountCard.css";
import SectionHeader from "./SectionHeader";

function DisplayAmountCard(props) {
  return (
    <>
      <SectionHeader title={props.title} icon={props.icon}></SectionHeader>
      <h1 className="price">
        {props.amount}
        <span className="price-currency">(USD)</span>
      </h1>
      <p>
        <span className={`${props.class}`}>{props.span + " "}</span>
        {props.comment}
      </p>
    </>
  );
}

export default DisplayAmountCard;
