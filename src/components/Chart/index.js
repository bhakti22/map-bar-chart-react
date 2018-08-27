import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import Header from './../Header';
import Footer from './../Footer';

import hotelsData from './../../data/hotels';

class Chart extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
      rangeData: [],
      width: 1024,
      height: 700,
      range: [0,10]
    }
  }

  componentDidMount () {
    this.setState({width: this.refs.barRoot.offsetWidth - 30});
    this.setState({height: Math.min(window.innerHeight, window.screen.height)  - 160});
    this.getHotelsCountByRating()

    window.onresize = () => {
     this.setState({
       width: this.refs.barRoot.offsetWidth - 30,
       height: Math.min(window.innerHeight, window.screen.height) - 160
     });
    };
  }

  getHotelsCountByRating (cb) {
    var data = [];
    hotelsData.map((hotel, index) => {
      data[hotel.rating - 1] = {Rating: hotel.rating, 'Hotels Count': data[hotel.rating - 1] ? data[hotel.rating - 1]['Hotels Count'] + 1 : 1};
    });
    this.setState({
      data
    }, () => {
      this.setDataInRange()
    })
  }

  setDataInRange () {
    var rangeData = this.state.data.slice(this.state.range[0], this.state.range[1]);
    this.setState({
      rangeData
    });
  }

  handleSliderChange (value) {
    console.log(value);
    this.setState({ range: value }, () => this.setDataInRange());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="pageContent container">
          <div className="row">
            <div className="pageHeader">
              <h1>Hotels Chart</h1>
              <div className="slidecontainer">
                <Range
                  allowCross={false}
                  max={10}
                  min={0}
                  value={this.state.range}
                  onChange={value => this.handleSliderChange(value)} />
              </div>
            </div>
            <div ref='barRoot'>
              <BarChart width={this.state.width} height={this.state.height} data={this.state.rangeData}>
                <XAxis dataKey="Rating" stroke="#0c9" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar type="monotone" dataKey="Hotels Count" fill="#0c9" barSize={30} />
              </BarChart>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Chart;
