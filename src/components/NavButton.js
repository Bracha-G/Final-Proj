import "./NavButton.css";

function NavButton(props) {
  return (
    <>
      <li className={`side-nav__item ${props.className}`}>
        {props.pic}
        <span>{props.span}</span>
      </li>
    </>
  );
}

export default NavButton;
