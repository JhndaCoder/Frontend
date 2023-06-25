import {Fragment, useState} from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import './Messaging.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Messaging = () => {
  const options = ['one', 'two', 'three'];
  const [value, onChange] = useState (new Date ());
  const defaultOption = options[0];

  return (
    <Fragment>
      <section id="messaging">
        <SideBar />
        <div className="messageWrapper subtitle">
          <h4>New 🖊️</h4>
          <div className="receiver">
            <h1 className="title">Receiver:</h1>
            <Dropdown
              options={options}
              // onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select an option"
              className="dropdown"
            />
          </div>
          <textarea placeholder="Enter your message here" />
        </div>
      </section>
    </Fragment>
  );
};
export default Messaging;
