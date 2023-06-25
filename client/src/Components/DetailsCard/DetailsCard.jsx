import {Fragment} from 'react';
import icon from './../../assets/icons8-person-96 1.svg';
import './DetailsCard.css';

const DetailsCard = () => {
  return (
    <Fragment>
      <div className="cardComponent">
        <div className="detailsCard subtitle">
          <img src={icon} alt="icon" />
          <h1>Name</h1>
          <h3>Position</h3>
          <h3>Company</h3>
          <h3>Location</h3>
        </div>
        <button className="subtitle">Send Message</button>
      </div>
    </Fragment>
  );
};
export default DetailsCard;
