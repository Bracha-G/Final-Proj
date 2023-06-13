import "./Nav.css";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
function Nav(props) {
  return (
    <>
      <nav className="sidebar">
        <div>
          <div className="sidebar__logo">
            <h2 className="sidebar__logo-header">The Ma'aser App</h2>
          </div>
          <ul className="side-nav">
            <NavButton
              className={"side-nav__item-active"}
              span={"Dashboard"}
              icon={<FontAwesomeIcon icon={faHouse} />}
            ></NavButton>
            <NavButton
              pic={""}
              span={"Income"}
              className={"undefined"}
              icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />}
            ></NavButton>
            <NavButton
              span={"Donations"}
              className={"undefined"}
              icon={<FontAwesomeIcon icon={faHandHoldingDollar} />}
            ></NavButton>
            <NavButton
              span={"Inbox"}
              className={"undefined"}
              icon={<FontAwesomeIcon icon={faCommentDots} />}
            ></NavButton>
            <NavButton
              span={"Settings"}
              className={"undefined"}
              icon={<FontAwesomeIcon icon={faGear} />}
            ></NavButton>
            <NavButton
              span={"Log Out"}
              className={"undefined"}
              icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
            ></NavButton>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
