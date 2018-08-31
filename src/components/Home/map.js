import React from 'react';
import GoogleMapReact from 'google-map-react';
import CustomMarker from './customMarker';

class Map extends React.Component{
    render(){
      const GoogleMapsMarkers = this.props.data.map(marker => (
        <CustomMarker
          key={marker.id}
          lat={marker.latitude}
          lng={marker.longitude}
          text={marker.name}
          rating={marker.rating}
        />
      ));
      return(
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
      )
    }
}

export default Map;
