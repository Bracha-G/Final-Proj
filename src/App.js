import "./App.css";
import Card from "./components/Card";
import MainSpace from "./components/MainSpace";
import DisplayAmountCard from "./components/DisplayAmountCard";
import Nav from "./components/Nav";
import HistoryCard from "./components/HistoryCard";
import HistoryDetailCard from "./components/HistoryDetailCard";
import SectionHeader from "./components/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TopPanel from "./components/TopPanel";
import CircleIcon from "./components/CircleIcon";
import PiChart from "./components/PiChart";

function App() {
  return (
    <>
      <div className="container">
        <Nav></Nav>
        <main className="main-content">
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
                  <HistoryDetailCard
                    name={"Yad Eliezer"}
                    date={"Jan 01,2023"}
                    amount={"2,000.00"}
                    svg={<CircleIcon className={"second"}></CircleIcon>}
                    icon={<FontAwesomeIcon icon={faHandHoldingDollar} />}
                    detail={"Helping the poor"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"Kollel Kever Rachel"}
                    date={"Jan 04,2022"}
                    amount={"2,000.00"}
                    svg={<CircleIcon className={"fourth"}></CircleIcon>}
                    icon={<FontAwesomeIcon icon={faHandHoldingDollar} />}
                    detail={"Torah Institusions"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"Likrat Kallah"}
                    date={"Jan 06,2023"}
                    amount={"2,000.00"}
                    svg={<CircleIcon className={"first"}></CircleIcon>}
                    icon={<FontAwesomeIcon icon={faHandHoldingDollar} />}
                    detail={"Hachnasas Kallah"}
                  ></HistoryDetailCard>
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
                  <HistoryDetailCard
                    name={"Compuskills"}
                    date={"Jan 01,2023"}
                    amount={"2,000.00"}
                    svg={<FontAwesomeIcon icon={faCheck} />}
                    icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />}
                    detail={"Yes"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"NerTzaddik"}
                    date={"Jan 04,2022"}
                    amount={"2,000.00"}
                    svg={<FontAwesomeIcon icon={faXmark} />}
                    icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />}
                    detail={"No"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"4Ugifts"}
                    date={"Jan 06,2023"}
                    amount={"2,000.00"}
                    svg={<FontAwesomeIcon icon={faXmark} />}
                    icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />}
                    detail={"No"}
                  ></HistoryDetailCard>
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
        </main>
      </div>
    </>
  );
}

export default App;
