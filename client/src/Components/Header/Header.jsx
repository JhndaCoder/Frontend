import { Fragment } from "react";
import tiet_logo from "./../../assets/tiet_logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <nav>
        <ul className='flex'>
          <div className='branding flex'>
            <img src={tiet_logo} alt='Thapar Logo' />
            <h1 className='title'>TIET Internship Portal</h1>
          </div>
          <div className='nav-links text-red title flex'>
            <li>
              <Link to='/login'>log in</Link>
            </li>
            <li>
              <Link to='/signup'>sign up</Link>
            </li>
          </div>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Header;
