import "./Container.css";

function Container(props) {
  return (
    <>
      <div className={`box ${props.class}`}>{props.children}</div>
    </>
  );
}

export default Container;
