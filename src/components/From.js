import "./Form.css";
import Button from "./Button";
import { useState } from "react";

function Form(props) {
  const [companyName, updateCompanyName] = useState("");
  const [amount, updateAmount] = useState("");
  const [date, updateDate] = useState("");
  const [category, updateCategory] = useState("");
  return (
    <>
      <form>
        <h4 className="formTitles">{props.name}</h4>
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
        <h4 className="formTitles">{props.extraInfo}</h4>
        <select
          onChange={(e) => updateCategory(e.target.value)}
          className="inputStyle"
          name="categories"
          id="categories"
        >
          <option value="">{"Select a Category"}</option>
          <option value="Hachnosas Kallah">{"Hachnosas Kallah"}</option>
          <option value="Helping the Poor">{"Helping the Poor"}</option>
        </select>
        <button className="btn btn-white button" onClick={props.SubmitHandler}>
          {"Submit"}
        </button>
      </form>
    </>
  );
}

export default Form;
