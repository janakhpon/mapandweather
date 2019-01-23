import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';
import './searchBar.css';

class SearchBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {term:''}

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(event){

        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
        
    }

    render(){
        return(
            <div className="container">

                <form onSubmit={this.onFormSubmit}>
                    <div className="form-row">
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder=" Type The Correct Names of Cities in Myanmar..." value={this.state.term} onChange={this.onInputChange} />
                        </div>
                        <div className="col-4">

                       <button type="submit" className="btn btn-primary btn-block">
                       <i className="fas fa-search" />
                       <b>&nbsp;search</b>
                       </button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}


function mapDispatchToProps(dispatch){

    return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);