import React from 'react';

class Footer extends React.Component {
  render () {
    const year = new Date().getFullYear();
    return(
      <footer className="container">
        <div className="row">
          &copy; {year}, All right reserved.
        </div>
      </footer>
    )
  }
}

export default Footer;
