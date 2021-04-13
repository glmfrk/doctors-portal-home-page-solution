import React, { useState } from 'react';
import AppoinmentFrom from '../AppoinmentFrom/AppoinmentFrom';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card shadow p3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p className="text-uppercase text-dark ">{booking.totalSpace} Spaces Available</p>
                    <button onClick={openModal} className="btn btn-brand  text-uppercase">Book Appoinment</button>
                    <AppoinmentFrom modalIsOpen={modalIsOpen}  appoinmentOn={booking} closeModal={closeModal}></AppoinmentFrom>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;