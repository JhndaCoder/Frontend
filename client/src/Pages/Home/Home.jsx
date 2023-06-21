import {Fragment} from 'react';
import './Home.css';
import {HomePageData} from '../../data.mjs';
import HomePageImg from './../../assets/homePageImg.svg';
import Header from '../../Components/Header/Header';

const Home = () => {
  return (
    <Fragment>
      <section id="home">
        <Header />
        <div className="content flex">
          <div className="info flex-col">
            <p className="text">{HomePageData}</p>
            <button type="button text-red subtitle">Read More</button>
          </div>
          <img src={HomePageImg} alt="Home Page Image" />
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
