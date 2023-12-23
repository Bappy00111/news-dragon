import React from 'react';
import moment from 'moment';
import logo from '../../../../public/assets/logo.png'
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='py-10'>
            <div className='text-center space-y-2 mb-8'>
                <img className='mx-auto' src={logo} alt="" />
                <p className='text-slate-500'>Journalism Without Fear or Favour</p>
                <p className='text-slate-500'>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className='flex bg-slate-200 p-4' >
                <button className='bg-[#D72050] py-2 px-4 text-white'>Latest</button>
                <Marquee className='text-red-600' speed={75} pauseOnHover>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default Header;