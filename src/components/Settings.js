import "./Settings.css";
import TopPanel from "./TopPanel";

function Settings(props) {
  return (
    <>
      <TopPanel name={"Brachi Goldberg"}></TopPanel>
      <div className="bottom-container">{"Welcome to the Settings Page!"}</div>
    </>
  );
}

export default Settings;
