import "./MainSpace.css";

function MainSpace(props) {
  return (
    <>
      <div className="main-content">{props.children}</div>
    </>
  );
}

export default MainSpace;
