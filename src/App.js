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
  const [donationArr, updateDonationArr] = useState([]);
  const [incomeArr, updateIncomeArr] = useState([]);

  function addDonation(donationObj) {
    updateDonationArr(function (prev) {
      return [...prev, donationObj];
    });
  }
  function removeDonation(id) {
    updateDonationArr(function (prev) {
      return prev.filter(function (donation) {
        return donation.id != id;
      });
    });
  }
  function addIncome(incomeObj) {
    updateIncomeArr(function (prev) {
      return [...prev, incomeObj];
    });
  }
  function removeIncome(id) {
    updateIncomeArr(function (prev) {
      return prev.filter(function (income) {
        return income.id != id;
      });
    });
  }

  function changeMainContent(value) {
    updateMainContent(function () {
      switch (value) {
        case "Dashboard":
          return <DashBoard></DashBoard>;
        case "Income":
          return (
            <Income
              deleteDonation={removeIncome}
              addDonation={addIncome}
              array={incomeArr}
            ></Income>
          );
        case "Donations":
          return (
            <Donations
              deleteDonation={removeDonation}
              addDonation={addDonation}
              array={donationArr}
            ></Donations>
          );
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
