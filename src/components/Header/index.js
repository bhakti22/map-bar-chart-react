import React from 'react';
import { Link } from 'react-router-dom';
import variables from './../../config';

class Header extends React.Component {
  render () {
    return(
      <header className="container">
        <div className="row">
            <div className="logo">
              <Link to="/">
                <img src={`${variables.path.assets}logo/logo.svg`} alt="Aertrip" />
                <img src={`${variables.path.assets}logo/aertrip.svg`} alt="Aertrip" />
              </Link>
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
