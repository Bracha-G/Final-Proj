import "./Donation.css";
import TopPanel from "./TopPanel";
import Card from "./Card";
import HistoryCard from "./HistoryCard";
import HistoryDetailCard from "./HistoryDetailCard";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState, useRef } from "react";

function Donations(props) {
  const [donationArr, updateDonationArr] = useState([]);
  const [companyName, updateCompanyName] = useState("");
  const [amount, updateAmount] = useState("");
  const [date, updateDate] = useState("");
  const [category, updateCategory] = useState("");
  let id = useRef(0);

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
  function CancelHandler(e) {
    e.preventDefault();
    updateCategory("");
    updateCompanyName("");
    updateAmount("");
    updateDate("");
  }
  function SubmitHandler(e) {
    e.preventDefault();
    const newDonation = {
      icon: faHandHoldingDollar,
      name: companyName,
      date: date,
      detail: category,
      amount: amount,
      id: id.current,
    };
    addDonation(newDonation);
    id.current++;
    updateCategory("");
    updateCompanyName("");
    updateAmount("");
    updateDate("");
  }
  function deleteDonation(id) {
    removeDonation(id);
  }
  return (
    <>
      <TopPanel name={"Brachi Goldberg"}></TopPanel>

      <div className="bottom-container">
        <div className="bottom-container__left_Donations">
          <div className="title">
            <h1 className="donationsTitle">
              {"Donations"}
              <span className="title">
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </span>
            </h1>
          </div>
          <div className="cardFlex">
            <div className="donationsCard">
              <Card>
                <HistoryCard
                  title1={"Donations"}
                  title2={"Date"}
                  title3={"Amount"}
                  title4={"Category"}
                  headerName={"Donation History"}
                >
                  {donationArr.map(function (item) {
                    return (
                      <HistoryDetailCard
                        name={item.name}
                        date={item.date}
                        amount={item.amount}
                        detail={item.detail}
                        svg={item.svg}
                        color={item.color}
                        onClick={deleteDonation}
                        id={item.id}
                      >
                        <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                      </HistoryDetailCard>
                    );
                  })}
                </HistoryCard>
              </Card>
            </div>
            <div className="formCard">
              <Card>
                <form>
                  <h4 className="formTitles">{"Company Name"}</h4>
                  <input
                    onChange={(e) => updateCompanyName(e.target.value)}
                    className="inputStyle"
                    type="text"
                    name="companyName"
                    value={companyName}
                  ></input>
                  <h4 className="formTitles">{"Date"}</h4>
                  <input
                    onChange={(e) => updateDate(e.target.value)}
                    className="inputStyle datePadding"
                    type="date"
                    name="date"
                    value={date}
                  ></input>
                  <h4 className="formTitles">{"Amount"}</h4>
                  <input
                    onChange={(e) => updateAmount(e.target.value)}
                    className="inputStyle"
                    type="text"
                    name="donationAmount"
                    value={amount}
                  ></input>
                  <h4 className="formTitles">{"Categories"}</h4>
                  <select
                    onChange={(e) => updateCategory(e.target.value)}
                    className="inputStyle"
                    name="categories"
                    id="categories"
                  >
                    <option value="">{"Select a Category"}</option>
                    <option value="Hachnosas Kallah">
                      {"Hachnosas Kallah"}
                    </option>
                    <option value="Helping the Poor">
                      {"Helping the Poor"}
                    </option>
                  </select>
                  <button
                    className="btn btn-white button"
                    onClick={SubmitHandler}
                  >
                    {"Submit"}
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donations;
