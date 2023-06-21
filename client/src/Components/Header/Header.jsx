import {Fragment} from 'react';

const Header = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <div className="branding">
            <img src="" alt="" />
            <h1>TIET Internship Portal</h1>
          </div>
          <div className="nav-links">
            <li>log in</li>
            <li>sign up</li>
          </div>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Header;
