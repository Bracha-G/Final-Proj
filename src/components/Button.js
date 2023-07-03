import "./Button.css";

function Button(props) {
  return (
    <>
      <button onClick={() => props.onClick()} className={`${props.class}`}>
        {props.buttonTitle}
      </button>
    </>
  );
}

export default Button;
