import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date);
    }
    return (
        <div>
            <Navbar></Navbar>
          
            <AppoinmentHeader handleDateChange={handleDateChange} />
            
            <BookAppointment date={selectedDate}></BookAppointment> */}
            <Footer></Footer>
        </div>
    );
};

export default Appointment;