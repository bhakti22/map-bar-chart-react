import React from 'react';

import Header from './../Header';
import Footer from './../Footer';

class NotFound extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="pageContent container">
          <div className="row">
           <div className="notFoundPage">
              Not found!
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
