import Dropdown from 'react-dropdown';
import './CSS/DropDown.css';

function DropDownComp({title, option}) {
  return (
    <Dropdown options={option} onChange={title} value={title} />
  );
}

export default DropDownComp;