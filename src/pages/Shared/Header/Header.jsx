import React from 'react';
import moment from 'moment';
import logo from '../../../../public/assets/logo.png'
import user from '../../../../public/assets/user.png'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

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
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className='mx-auto'>
                        <div className='space-x-5 text-slate-500 font-medium'>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/career'>Career</Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#403F3F] p-2 px-6 text-white'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;