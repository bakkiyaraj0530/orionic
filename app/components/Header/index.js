import React from 'react';
import PropTypes from 'prop-types';
import SearchField from 'react-search-field';

import profile from '../../images/profile.jpg';
import downarrow from '../../images/downarrow.png';

function Header({ getData }) {

  return (
    <div className="top_header_area">
      <div className="container " id="header">
        <div className="row">
          <div className="col-5 col-lg-3" ><b>Movie Categlog</b></div>
          <div className="col-7 col-sm-6 col-lg-9">
            <div className="signup-search-area d-flex align-items-center justify-content-end">
              <div className="col-7 col-sm-6 col-lg-9">
                <SearchField
                  placeholder="Search Movie..."
                  onChange={getData}
                  // searchText="This is initial search text"
                  classNames="searchmovie"
                />
              </div>
              <div className="login_register_area d-flex col-lg-4">
                <div className="login">
                  <a href="#"><img src={profile} alt="user" width="15px" height="15px" /></a>
                   Alexander           
                   <a href="#"><img src={downarrow} className="downarrow" alt="user" width="15px" height="15px" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  getData: PropTypes.func,
};

export default Header;
