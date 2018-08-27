import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return(
      <header className="container">
        <div className="row">
            <div className="logo">
              <img src="https://d2mccptxtk231d.cloudfront.net/1.0.788/resources/assets/scss/skin/img/common/logo/logo.svg" />
              <img src="https://d2mccptxtk231d.cloudfront.net/1.0.788/resources/assets/scss/skin/img/common/logo/aertrip.svg" />
            </div>
            <nav>
              <Link to="/">Map</Link>
              <Link to="/chart">Chart</Link>
            </nav>
        </div>
      </header>
    )
  }
}

export default Header;
