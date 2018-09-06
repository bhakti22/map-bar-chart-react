import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return(
      <header className="container">
        <div className="row">
            <div className="logo">
              <Link to="/">
                Logo
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
