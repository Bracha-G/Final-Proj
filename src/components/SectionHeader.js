import "./SectionHeader.css";

function SectionHeader(props) {
  return (
    <>
      <div className="header-container">
        <h3 class="section-header">{props.title}</h3>
        <div className={"up-arrow"}>{props.icon}</div>
      </div>
    </>
  );
}

export default SectionHeader;
