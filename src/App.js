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
import Button from "./components/Button";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import PieChart from "./components/PieChart";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <>
      <div className="container">
        <nav class="sidebar">
          <Nav></Nav>
        </nav>
        <main className="main-content">
          <div className="top-container">
            <form className="dates">
              For Dates Between:
              <input type="date" value="2023-01-01" required="required" />
              <input type="date" value="2023-01-01" required="required" />
              <Button
                class={"btn-purple submit-btn"}
                buttonTitle={"Go"}
              ></Button>
            </form>
            <div class="user-nav">
              <div class="user-info">
                <div className=".user-image">
                  <FontAwesomeIcon icon={faUser} />
                </div>

                <span class="user-name">Brachi Goldberg</span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <span>Log Out</span>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="bottom-container__left">
              <Card class="total-box">
                <div className="total-box__left">
                  <DisplayAmountCard
                    title={"Total Income"}
                    amount={"$583,530.00"}
                    comment={"increase compared to last year"}
                    span={"20%"}
                    class={"percentage-increase"}
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
                    svg={
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        style={{
                          "--fa-primary-color": "#321e7b",
                          "--fa-secondary-color": "#3c2fa2",
                          "--fa-secondary-opacity": "0.5",
                        }}
                      />
                    }
                    detail={"Helping the poor"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"Kollel Kever Rachel"}
                    date={"Jan 04,2022"}
                    amount={"2,000.00"}
                    svg={
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        style={{
                          "--fa-primary-color": "#321e7b",
                          "--fa-secondary-color": "#3c2fa2",
                          "--fa-secondary-opacity": "0.5",
                        }}
                      />
                    }
                    detail={"Torah Institusions"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"Likrat Kallah"}
                    date={"Jan 06,2023"}
                    amount={"2,000.00"}
                    svg={
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        style={{
                          "--fa-primary-color": "#321e7b",
                          "--fa-secondary-color": "#3c2fa2",
                          "--fa-secondary-opacity": "0.5",
                        }}
                      />
                    }
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
                    detail={"Yes"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"NerTzaddik"}
                    date={"Jan 04,2022"}
                    amount={"2,000.00"}
                    svg={<FontAwesomeIcon icon={faXmark} />}
                    detail={"No"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"4Ugifts"}
                    date={"Jan 06,2023"}
                    amount={"2,000.00"}
                    svg={<FontAwesomeIcon icon={faXmark} />}
                    detail={"No"}
                  ></HistoryDetailCard>
                </HistoryCard>
              </Card>
            </div>
            <div className=".bottom-container__right">
              <Card class={""}>
                <DisplayAmountCard
                  title={"Your Ma'aser Balance"}
                  amount={"$7823"}
                  comment={"From Jan 01,2023 to May 24,2023"}
                  span={""}
                  class={""}
                ></DisplayAmountCard>
                <div className="button-box">
                  <button class="btn btn-purple">Donate</button>
                </div>
              </Card>
              <Card class={"spending-box"}>
                <SectionHeader title={" Donations by category"}></SectionHeader>
                <PieChart title={"Overall"} amount={"583,530.00"}></PieChart>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
