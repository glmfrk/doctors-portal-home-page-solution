import React from 'react';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
import { faClock } from '@fortawesome/free-regular-svg-icons';

    const infoData = [{
        title: 'Opening Hours',
        description:'we are open 7 days',
        icon: faClock,
        bgColor: 'primary'
    },
    {
        title: 'Visit Our Location',
        description:'Brooklyn NY 10003 USA',
        icon: faMapMarker,
        bgColor: 'dark'
    },
    {
        title: 'Call Us Now',
        description:'+659 00052 793',
        icon: faPhone,
        bgColor: 'primary'
    }
]
const BussinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BussinessInfo;