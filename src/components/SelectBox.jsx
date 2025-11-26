import { FaAngleDown } from "react-icons/fa";

function SelectBox({ selectElement }) {
  return (
    <div className="select-box">
      {selectElement}
      <FaAngleDown size={14} className="icon" />
    </div>
  );
}

export default SelectBox;