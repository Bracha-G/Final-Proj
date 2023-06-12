import "./NavButton.css";

function NavButton(props) {
  return (
    <>
      <li className={`side-nav__item ${props.className}`}>
        <div className="icon">{props.icon}</div>

        <span>{props.span}</span>
      </li>
    </>
  );
}

export default NavButton;
