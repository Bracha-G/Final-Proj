import "./App.css";
import Card from "./components/Card";
import MainSpace from "./components/MainSpace";
import DisplayAmountCard from "./components/DisplayAmountCard";
import Nav from "./components/Nav";
import HistoryCard from "./components/HistoryCard";
import HistoryDetailCard from "./components/HistoryDetailCard";

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
              <input type="date" value="2023-01-01" required="required" />
              <input type="date" value="2023-01-01" required="required" />
            </form>
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
                  ></DisplayAmountCard>
                </div>
                <div className="total-box__right">
                  <DisplayAmountCard
                    title={"Total Donations"}
                    amount={"$50,530.00"}
                    comment={"decrease compared to last year"}
                    span={"10%"}
                    class={"percentage-decrease"}
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
                    svg={""}
                    detail={"Helping the poor"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"Kollel Kever Rachel"}
                    date={"Jan 04,2022"}
                    amount={"2,000.00"}
                    svg={""}
                    detail={"Torah Institusions"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"Likrat Kallah"}
                    date={"Jan 06,2023"}
                    amount={"2,000.00"}
                    svg={""}
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
                    svg={""}
                    detail={"Yes"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"NerTzaddik"}
                    date={"Jan 04,2022"}
                    amount={"2,000.00"}
                    svg={""}
                    detail={"No"}
                  ></HistoryDetailCard>
                  <HistoryDetailCard
                    name={"4Ugifts"}
                    date={"Jan 06,2023"}
                    amount={"2,000.00"}
                    svg={""}
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
                <div class="button-box">
                  <button class="btn btn-purple">Donate</button>
                </div>
              </Card>
              <Card class={""}></Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
