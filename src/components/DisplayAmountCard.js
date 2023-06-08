import "./DisplayAmountCard.css";

function DisplayAmountCard(props) {
  return (
    <>
      <div className="header-container">
        <h3 className="section-header">{props.title}</h3>
      </div>
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
