import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import BussinessInfo from '../BussinessInfo/BussinessInfo';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="header-container  container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
                <BussinessInfo></BussinessInfo>
            </div>
        </div>
    );
};

export default Header;