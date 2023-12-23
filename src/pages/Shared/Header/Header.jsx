import React from 'react';
import moment from 'moment';
import logo from '../../../../public/assets/logo.png'

const Header = () => {
    return (
        <div >
            <div className='text-center space-y-2'>
                <img className='mx-auto' src={logo} alt="" />
                <p className='text-slate-500'>Journalism Without Fear or Favour</p>
                <p className='text-slate-500'>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;