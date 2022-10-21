import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../../Page/Login/Login';
import Navbar from '../Navbar/Navbar';



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;