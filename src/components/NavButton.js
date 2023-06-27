import "./NavButton.css";
import { useState } from "react";

function NavButton(props) {
  function changePage() {
    props.onClick(props.span);
  }

  return (
    <>
      <li onClick={changePage} className={`side-nav__item ${props.className}`}>
        <div id={props.key} className="icon">
          {props.icon}
        </div>
        <span>{props.span}</span>
      </li>
    </>
  );
}

export default NavButton;
