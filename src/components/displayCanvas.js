import React from 'react';
import './displayCanvas.css';
import DisplayMap from './displayMap';
import Info from './displayInfo';
import Chart from './displayChart';
import { connect } from 'react-redux';


class DisplayCanvas extends React.Component {

    renderWeather(cityData) {
        const {name, population, id} = cityData.city;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><DisplayMap lon={lon} lat={lat} id={id} /></td>
                <td><Info name={name} population={population} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }


    render() {

        return (

            <div className="container-fluid">

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Information</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>

            </div>

        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
  }
  
  export default connect(mapStateToProps)(DisplayCanvas);
  
