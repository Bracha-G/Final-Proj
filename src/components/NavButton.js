import "./NavButton.css";
import { useState } from "react";

function NavButton(props) {
  const [NavOption, SetNavOption] = useState("");

  function hi() {
    props.onClick(props.span);
  }

  return (
    <>
      <li onClick={hi} className={`side-nav__item ${props.className}`}>
        <div id={props.key} className="icon">
          {props.icon}
        </div>
        <span>{props.span}</span>
      </li>
    </>
  );
}

export default NavButton;
