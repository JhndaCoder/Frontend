import {Fragment} from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <Fragment>
      <div className="detailsSideBar subtitle">
        <button type="button">Site HR</button>
        <button type="button">HEAD HR</button>
        <button type="button">KEY PERSON</button>
        <button type="button">INDUSTRY MENTOR</button>
      </div>
    </Fragment>
  );
};
export default SideBar;
