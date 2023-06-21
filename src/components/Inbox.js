import "./Inbox.css";
import TopPanel from "./TopPanel";

function Inbox(props) {
  return (
    <>
      <TopPanel name={"Brachi Goldberg"}></TopPanel>
      <div className="bottom-container">{"Welcome to the Inbox Page!"}</div>
    </>
  );
}

export default Inbox;
