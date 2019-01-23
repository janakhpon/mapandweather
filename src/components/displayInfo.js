import React from 'react'

const Info = ({ name, population }) => {



    return (
        <div className="card">
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <h5 className="card-title">population : {population}</h5>
                <p className="card-text"> Check more info below.</p>
                <a href="/" className="btn btn-primary">more info</a>
            </div>
        </div>
    )
}

export default Info;