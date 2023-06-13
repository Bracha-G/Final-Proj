import "./TopPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function TopPanel(props) {
  return (
    <>
      <div className="top-container">
        <form className="dates">
          For Dates Between:
          <input type="date" value="2023-01-01" required="required" />
          <input type="date" value="2023-01-01" required="required" />
          <Button class={"btn-purple submit-btn"} buttonTitle={"Go"}></Button>
        </form>
        <div class="user-nav">
          <div class="user-info">
            <div className=".user-image">
              <FontAwesomeIcon icon={faUser} />
            </div>

            <span class="user-name">{props.name}</span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span className="logOut">Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPanel;
