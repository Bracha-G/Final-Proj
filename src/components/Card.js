import "./Card.css";

function Card(props) {
  return (
    <>
      <div className={`box ${props.class}`}>{props.children}</div>
    </>
  );
}

export default Card;
