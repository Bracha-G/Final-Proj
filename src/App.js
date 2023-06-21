import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import DashBoard from "./components/DashBoard";
import TopPanel from "./components/TopPanel";
import Income from "./components/Income";
import Donations from "./components/Donations";
import Inbox from "./components/Inbox";
import LogOut from "./components/LogOut";
import Settings from "./components/Settings";

function App() {
  const [mainContent, updateMainContent] = useState(<DashBoard></DashBoard>);

  function changeMainContent(value) {
    updateMainContent(function () {
      switch (value) {
        case "Dashboard":
          return <DashBoard></DashBoard>;
        case "Income":
          return <Income></Income>;
        case "Donations":
          return <Donations></Donations>;
        case "Inbox":
          return <Inbox></Inbox>;
        case "Log Out":
          return <LogOut></LogOut>;
        case "Settings":
          return <Settings></Settings>;
      }
    });
  }

  return (
    <>
      <div className="container">
        <Nav onClick={changeMainContent}></Nav>
        <main className="main-content">{mainContent}</main>
      </div>
    </>
  );
}

export default App;
