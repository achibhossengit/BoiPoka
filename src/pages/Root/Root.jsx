import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto p-5'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;