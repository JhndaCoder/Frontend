import {Fragment, useState} from 'react';
import Dropdown from 'react-dropdown';
import Calendar from 'react-calendar';
import 'react-dropdown/style.css';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import Header from '../../Components/Header/Header';

const Calendar1 = () => {
  const options = ['one', 'two', 'three'];
  const [value, onChange] = useState (new Date ());
  const defaultOption = options[0];

  return (
    <Fragment>
      <section id="calendar">
        <Header />
        <header>
          <h1 className="title">Company:</h1>
          <Dropdown
            options={options}
            // onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
            className="dropdown"
          />
        </header>
        <div className="cal">
          <Calendar onChange={onChange} value={value} className="calendarr" />
        </div>
      </section>
    </Fragment>
  );
};
export default Calendar1;
