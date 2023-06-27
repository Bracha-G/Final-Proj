import "./Donation.css";
import TopPanel from "./TopPanel";
import Card from "./Card";
import HistoryCard from "./HistoryCard";
import HistoryDetailCard from "./HistoryDetailCard";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function Donations(props) {
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
        </div>
      </div>
    </>
  );
}

export default Donations;
