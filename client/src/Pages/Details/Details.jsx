import {Fragment} from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import DetailsCard from '../../Components/DetailsCard/DetailsCard';
import Header from '../../Components/Header/Header';
import './Details.css';

const Details = () => {
  return (
    <Fragment>
      <div className="detailsContainer">
        <Header />
        <SideBar />
        <div className="detailsCardsWrapper">
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
        </div>
      </div>
    </Fragment>
  );
};
export default Details;
