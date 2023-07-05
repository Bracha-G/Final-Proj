import "./Income.css";
import TopPanel from "./TopPanel";
import Card from "./Card";
import HistoryCard from "./HistoryCard";
import HistoryDetailCard from "./HistoryDetailCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import Form from "./From";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";

function Income(props) {
  //const [donationArr, updateDonationArr] = useState([]);
  const [companyName, updateCompanyName] = useState("");
  const [amount, updateAmount] = useState("");
  const [date, updateDate] = useState("");
  const [category, updateCategory] = useState("");
  let id = useRef(0);

  /*function addDonation(donationObj) {
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
  }*/

  function SubmitHandler(e) {
    e.preventDefault();
    const newDonation = {
      icon: faMoneyCheckDollar,
      name: companyName,
      date: date,
      detail: category,
      amount: amount,
      id: id.current,
    };
    props.addDonation(newDonation);
    id.current++;
    updateCategory("");
    updateCompanyName("");
    updateAmount("");
    updateDate("");
  }
  /*function deleteDonation(id) {
    removeDonation(id);
  }*/
  return (
    <>
      <TopPanel name={"Brachi Goldberg"}></TopPanel>

      <div className="bottom-container">
        <div className="bottom-container__left_Donations">
          <div className="title">
            <h1 className="donationsTitle">
              {"Income"}
              <span className="title">
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
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
                  {props.array.map(function (item) {
                    return (
                      <HistoryDetailCard
                        name={item.name}
                        date={item.date}
                        amount={item.amount}
                        detail={item.detail}
                        svg={item.svg}
                        color={item.color}
                        onClick={props.deleteDonation}
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
                <Form
                  name="Company Name"
                  extraInfo="Categories"
                  SubmitHandler={SubmitHandler}
                ></Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Income;
