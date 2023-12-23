import React from 'react';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RightSide = () => {
    return (
        <div>
            <div className='space-y-3 py-4'>
                <h1 className='font-semibold text-3xl'>Login With</h1>
                <button className="btn btn-outline btn-info w-full text-lg flex items-center">
                    <FaGoogle className='h-6 w-6'></FaGoogle>
                    Google</button>
                <button className="btn btn-outline w-full text-lg flex items-center">
                    <FaGithub className='h-6 w-6'></FaGithub>
                    Github</button>
            </div>
            <div>
                <h1 className='font-semibold text-3xl'>Find Us On</h1>
                <ul className="menu  rounded py-3 divide-y divide-black-200 border">
                    <li className='text-xl'><Link>
                    <FaFacebook className='text-cyan-500 h-8 w-8 mr-2'></FaFacebook>
                    facebook</Link></li>
                    <li className='text-xl'><Link>
                    <FaTwitter  className='text-cyan-500 h-8 w-8 mr-2'></FaTwitter>
                    Twitter</Link></li>
                    <li className='text-xl'><Link>
                    <FaInstagram className='text-rose-600 h-8 w-8 mr-2'></FaInstagram>
                    Instagram</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default RightSide;