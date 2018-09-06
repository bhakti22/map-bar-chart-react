import React from 'react';

import Header from './../Header';
import Footer from './../Footer';
import RangeSlider from './rangeSlider';
import Map from './map';
import BarChartCustom from './barChart';

import data from './../../data/hotels';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data,
      rangeDataMap: data,
      range: [0,10],
      page: this.props.location.pathname === '/chart' ? 'Chart' : 'Map',
      dataRatingSorted: [],
      rangeDataChart: [],
      chart: {
        width: 1024,
        height: 700
      }
    }
  }

  static defaultProps = {
    map:{
      center: [19.1201381, 72.8803811],
      zoom: 10
    },
    rangeSlider: {
      allowCross: false,
      max: 10,
      min: 0,
    }
  };

  componentWillReceiveProps(nextProps){
    if(this.props.location.pathname !== nextProps.location.pathname){
      this.setState({
        page: nextProps.location.pathname === '/chart' ? 'Chart' : 'Map'
      }, () => {
        if(this.state.page.toLowerCase() === 'chart')this.resizeChart()
      })
    }
  }

  componentDidMount () {
    this.resizeChart();
    this.getHotelsCountByRating()

    window.onresize = () => this.resizeChart()
  }

  resizeChart () {
    if(this.state.page.toLowerCase() === 'chart' && !window.reScalingOn){
      window.reScalingOn = true;
      setTimeout(() =>{
       this.setState({
         chart : {
           width: this.refs.barRoot.offsetWidth - 30,
           height: Math.min(window.innerHeight, window.screen.height) - 160
         }
       });
       window.reScalingOn = false;
     }, 100);
   }
  }

  getHotelsCountByRating (cb) {
    // store data in array sorted by rating
    var hotelsData = [];
    data.map((hotel, index) => {
      return hotelsData[hotel.rating - 1] = {Rating: hotel.rating, 'Hotels Count': hotelsData[hotel.rating - 1] ? hotelsData[hotel.rating - 1]['Hotels Count'] + 1 : 1};
    });
    this.setState({dataRatingSorted: hotelsData}, () => {
      this.setDataInRange()
    })
  }

  setDataInRange (){
    // set sorted data for bar chart
    var rangeDataChart = this.state.dataRatingSorted.slice(this.state.range[0], this.state.range[1]);
      this.setState({
        rangeDataChart
      });

    // set sorted data for map
    var rangeDataMap =  this.state.data.reduce((arr, hotel) => {
      if(hotel.rating >= this.state.range[0] && hotel.rating <= this.state.range[1]) arr.push(hotel);
      return arr;
    }, [])
    Promise.all(rangeDataMap).then(values =>
      this.setState({
          rangeDataMap: values
        })
    );
  }

  handleSliderChange (value){
    this.setState({ range: value }, () => this.setDataInRange());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="pageContent container">
          <div className="row">
          <section className="pageHeader">
            <h1>Hotels {this.state.page}</h1>
            <div className="slidecontainer">
              <RangeSlider {...this.props.rangeSlider} range={this.state.range} onHandleRangeChange= {(value) => this.handleSliderChange(value)} />
            </div>
            </section>
            {(this.state.page.toLowerCase() === 'map') ?
              <Map {...this.props.map} data={this.state.rangeDataMap} />
              :
              <div ref="barRoot">
                <BarChartCustom {...this.state.chart} data={this.state.rangeDataChart} />
              </div>
            }
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
