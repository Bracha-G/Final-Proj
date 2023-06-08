import "./Button.css";

function Button(props) {
  return (
    <>
      <button className={`${props.class}`}>{props.buttonTitle}</button>
    </>
  );
}

export default Button;
