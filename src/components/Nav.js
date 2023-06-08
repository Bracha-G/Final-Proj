import "./Nav.css";
import NavButton from "./NavButton";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <>
      <div>
        <div className="sidebar__logo">
          <h2 className="sidebar__logo-header">The Ma'aser App</h2>
        </div>
        <ul className="side-nav">
          <NavButton
            className={"side-nav__item-active"}
            span={"Dashboard"}
          ></NavButton>
          <NavButton
            pic={""}
            span={"Income"}
            className={"undefined"}
          ></NavButton>
          <NavButton span={"Donations"} className={"undefined"}></NavButton>
          <NavButton span={"Inbox"} className={"undefined"}></NavButton>
          <NavButton
            pic={<FontAwesomeIcon icon={faGear} />}
            span={"Settings"}
            className={"undefined"}
          ></NavButton>
          <NavButton span={"Log Out"} className={"undefined"}></NavButton>
        </ul>
      </div>
    </>
  );
}

export default Nav;
