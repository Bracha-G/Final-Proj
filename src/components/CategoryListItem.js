import "./CategoryListItem.css";
import CircleIcon from "./CircleIcon";

function CategoryListItem(props) {
  return (
    <>
      <div className="pie-chart__labels-item">
        <div className="label">
          <CircleIcon className={props.className}></CircleIcon>
          {props.categoryName}
        </div>
        {props.amount}
      </div>
    </>
  );
}

export default CategoryListItem;
