import "./DashBoard.css";
import Card from "./Card";
import DisplayAmountCard from "./DisplayAmountCard";
import HistoryCard from "./HistoryCard";
import HistoryDetailCard from "./HistoryDetailCard";
import SectionHeader from "./SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TopPanel from "./TopPanel";
import PiChart from "./PiChart";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function DashBoard(props) {
  const historyCardDonationsArr = [
    {
      name: "Yad Eliezer",
      date: "Jan 01,2023",
      amount: "2,000.00",
      icon: faHandHoldingDollar,
      detail: "Helping the poor",
      svg: faCircle,
      color: "#ffacc8",
    },
    {
      name: "Kollel Kever Rachel",
      date: "Jan 04,2022",
      amount: "2,000.00",
      icon: faHandHoldingDollar,
      detail: "Torah Institutions",
      svg: faCircle,
      color: "#7c5cfc",
    },
    {
      name: "Likrat Kallah",
      date: "Jan 06,2023",
      amount: "2,000.00",
      icon: faHandHoldingDollar,
      detail: "Hachnasas Kallah",
      svg: faCircle,
      color: "#eb7ca6",
    },
  ];
  const historyCardIncomeArr = [
    {
      name: "Compuskills",
      date: "Jan 01,2023",
      amount: "2,000.00",
      svg: faCheck,
      icon: faMoneyCheckDollar,
      detail: "Yes",
    },
    {
      name: "NerTzaddik",
      date: "Jan 04,2022",
      amount: "2,000.00",
      svg: faXmark,
      icon: faMoneyCheckDollar,
      detail: "No",
    },
    {
      name: "4Ugifts",
      date: "Jan 06,2023",
      amount: "2,000.00",
      svg: faXmark,
      icon: faMoneyCheckDollar,
      detail: "No",
    },
  ];
  return (
    <>
      <TopPanel name={"Brachi Goldberg"}></TopPanel>
      <div className="bottom-container">
        <div className="bottom-container__left">
          <Card class="total-box">
            <div className="total-box__left">
              <DisplayAmountCard
                title={"Total Income"}
                amount={"$583,530.00"}
                comment={"increase compared to last year"}
                span={"20%"}
                class={"percentage-increase "}
                icon={<FontAwesomeIcon icon={faDollarSign} />}
              ></DisplayAmountCard>
            </div>
            <div className="total-box__right">
              <DisplayAmountCard
                title={"Total Donations"}
                amount={"$50,530.00"}
                comment={"decrease compared to last year"}
                span={"10%"}
                class={"percentage-decrease"}
                icon={<FontAwesomeIcon icon={faHandHoldingHeart} />}
              ></DisplayAmountCard>
            </div>
          </Card>
          <Card>
            <HistoryCard
              title1={"Donations"}
              title2={"Date"}
              title3={"Amount"}
              title4={"Category"}
              headerName={"Donation History"}
            >
              {historyCardDonationsArr.map(function (item) {
                return (
                  <HistoryDetailCard
                    name={item.name}
                    date={item.date}
                    amount={item.amount}
                    detail={item.detail}
                    svg={item.svg}
                    color={item.color}
                  >
                    <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                  </HistoryDetailCard>
                );
              })}
            </HistoryCard>
          </Card>
          <Card>
            <HistoryCard
              title1={"Company"}
              title2={"Date"}
              title3={"Amount"}
              title4={"Exempt from Ma'aser"}
              headerName={"Income History"}
            >
              {historyCardIncomeArr.map(function (item) {
                return (
                  <HistoryDetailCard
                    name={item.name}
                    date={item.date}
                    amount={item.amount}
                    detail={item.detail}
                    svg={item.svg}
                  >
                    <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                  </HistoryDetailCard>
                );
              })}
            </HistoryCard>
          </Card>
        </div>
        <div className="bottom-container__right">
          <Card class={""}>
            <DisplayAmountCard
              title={"Your Ma'aser Balance"}
              amount={"$7823"}
              comment={"From Jan 01,2023 to May 24,2023"}
              span={""}
              class={""}
            ></DisplayAmountCard>
            <div className="button-box">
              <button class="btn btn-purple">
                <FontAwesomeIcon icon={faHandHoldingDollar} />
                Donate
              </button>
            </div>
          </Card>
          <Card class={"spending-box"}>
            <SectionHeader title={" Donations by category"}></SectionHeader>
            <PiChart></PiChart>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
