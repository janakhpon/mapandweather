import React from 'react';
import './displayCanvas.css';

class DisplayMap extends React.Component{

    componentDidMount() {
        new window.google.maps.Map(this.refs.map, {
          zoom: 8,
          center: {
            lat: this.props.lat,
            lng: this.props.lon
          }
        });
      }

    render(){
        return(
            <div className="card border-success mb-3" style={{width: 300, height:250}}>
            
            <div ref="map" className="card-img-top" style={{width: '100%', height:'100%'}}>
              
            </div>
        
          </div>
        )
    }
}

export default DisplayMap;