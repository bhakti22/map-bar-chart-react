import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import Header from './../Header';
import Footer from './../Footer';
import CustomMarker from './../UI/customMarker';

import data from './../../data/hotels';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data,
      rangeData: data,
      range: [1,10]
    }
  }

  static defaultProps = {
    center: [19.1201381, 72.8803811],
    zoom: 10
  };

  setDataInRange (){
    var rangeData =  this.state.data.reduce((arr, hotel) => {
      if(hotel.rating >= this.state.range[0] && hotel.rating <=this.state.range[1])arr.push(hotel);
      return arr;
    }, [])
    Promise.all(rangeData).then(values =>
      this.setState({
          rangeData: values
        })
    );
  }

  handleSliderChange (value){
    this.setState({ range: value }, () => this.setDataInRange());
  }

  render() {

    const GoogleMapsMarkers = this.state.rangeData.map(marker => (
      <CustomMarker
        key={marker.id}
        lat={marker.latitude}
        lng={marker.longitude}
        text={marker.name}
        rating={marker.rating}
      />
    ));

    return (
      <div className="App">
        <Header />
        <section className="pageContent container">
          <div className="row">
          <section className="pageHeader">
            <h1>Hotels Map</h1>
            <div className="slidecontainer">
              <Range
                allowCross={false}
                max={10}
                min={1}
                value={this.state.range}
                onChange={value => this.handleSliderChange(value)} />
            </div>
            </section>
            <section style={{ height: '80vh', width: '100%' }} className="mapContainer">

              <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                layerTypes={['TrafficLayer', 'TransitLayer']}
                bootstrapURLKeys={{
                  // key: CONFIG.GOOGLE_MAPS_API_KEY,
                  language: 'en'
                }}
              >
                {GoogleMapsMarkers}
              </GoogleMapReact>
            </section>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
