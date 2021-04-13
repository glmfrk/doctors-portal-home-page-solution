import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const AppoinmentFrom = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  
    return (
        <div>
        <Modal
            isOpen={modalIsOpen}
            
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
 
          <h1>Hello Form</h1>
        </Modal>
        </div>
    );
};

export default AppoinmentFrom;