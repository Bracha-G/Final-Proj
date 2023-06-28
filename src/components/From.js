import "./Form.css";
import Button from "./Button";

function Form(props) {
  return (
    <>
      <form>
        <h4 className="formTitles">{"Company Name"}</h4>
        <input
          className="inputStyle"
          type="text"
          name="companyName"
          value=""
        ></input>
        <h4 className="formTitles">{"Date"}</h4>
        <input
          className="inputStyle datePadding"
          type="date"
          name="date"
          value=""
        ></input>
        <h4 className="formTitles">{"Amount"}</h4>
        <input
          className="inputStyle"
          type="text"
          name="donationAmount"
          value=""
        ></input>
        <h4 className="formTitles">{"Categories"}</h4>
        <select className="inputStyle" name="categories" id="categories">
          <option value="hachnosasKallah">{"Hachnosas Kallah"}</option>
          <option value="helpingPoor">{"Helping the Poor"}</option>
        </select>
        <Button buttonTitle={"Submit"} class={"btn btn-white button "}></Button>
        <Button buttonTitle={"Cancel"} class={"btn btn-white button "}></Button>
      </form>
      ;
    </>
  );
}

export default Form;
