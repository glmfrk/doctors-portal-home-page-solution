import React from 'react';

const ServicesDetails = ({service}) => {
    return (
        <div className="col-md-4 mb-5 text-center">
            <img style={{height:'50px'}} src={service.image} alt={service.names} className="img-fluid"/>
            <h5  className="mt-3 headingColor mb-3">{service.names}</h5>
            <p className="text-secoundary">{service.desCription}</p>
        </div>
    );
};

export default ServicesDetails;