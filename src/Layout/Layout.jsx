import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <div className='grid lg:grid-cols-[3fr,6fr,3fr]'>
                <div>
                    <h1>left side</h1>
                </div>
                <div>
                    <h1>Home page</h1>
                </div>
                <div>
                    <h1>right side</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;