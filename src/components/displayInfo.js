import React from 'react'

const Info = ({ name, population, id }) => {



    return (
        <div className="card">
            <h5 className="card-header center"><i className="fas fa-map-marker-alt fa-2x" /> City : {name}</h5>
            <div className="card-body">
                <h6 className="card-title center"><i className="fas fa-users" /> population : {population}</h6>
                <h6 className="card-title center"><i className="fas fa-map-marked-alt"/> C- ID : {id}</h6>
                
            </div>
        </div>
    )
}

export default Info;
