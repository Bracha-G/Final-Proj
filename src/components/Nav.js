import "./Nav.css";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { toHaveClass } from "@testing-library/jest-dom/matchers";

function Nav(props) {
  const navButtonArr = [
    {
      className: "side-nav__item-active",
      span: "Dashboard",
      icon: <FontAwesomeIcon icon={faHouse} />,
      key: 1,
    },
    {
      span: "Income",
      className: "undefined",
      icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
      key: 2,
    },
    {
      span: "Donations",
      className: "undefined",
      icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
      key: 3,
    },
    {
      span: "Inbox",
      className: "undefined",
      icon: <FontAwesomeIcon icon={faCommentDots} />,
      key: 4,
    },
    {
      span: "Settings",
      className: "undefined",
      icon: <FontAwesomeIcon icon={faGear} />,
      key: 5,
    },
    {
      span: "Log Out",
      className: "undefined",
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      key: 6,
    },
  ];
  return (
    <>
      <nav className="sidebar">
        <div>
          <div className="sidebar__logo">
            <h2 className="sidebar__logo-header">The Ma'aser App</h2>
          </div>
          <ul className="side-nav">
            {navButtonArr.map(function (user) {
              return (
                <NavButton
                  onClick={props.onClick}
                  option={user.onClick}
                  span={user.span}
                  className={user.className}
                  icon={user.icon}
                  key={user.key}
                ></NavButton>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
