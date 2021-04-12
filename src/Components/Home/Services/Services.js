import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/tooth.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

    const servicesData = [{
        image:Fluoride,
        names:'Fluoride Treatment',
        desCription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam quod fugiat?'
    },
    {
        image:Cavity,
        names:'Cavity Fillings',
        desCription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam quod fugiat?'
    },
    {
        image:Whitening,
        names:'Teeth Whitening',
        desCription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam quod fugiat?'
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}} className="text-uppercase">Our Services  </h5>
                <h2  style={{color:'#3A4256'}}>Services We Provide</h2>
                <p></p>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row mt-5 pt-5">
                {
                    servicesData.map(service => <ServicesDetails service={service}></ServicesDetails>)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;