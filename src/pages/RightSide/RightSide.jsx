import React from 'react';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import image from '../../../public/assets/qZone1.png'
import image2 from '../../../public/assets/qZone2.png'
import image3 from '../../../public/assets/qZone3.png'
import bg from '../../../public/assets/bg1.png'

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
                <h1 className='font-semibold text-3xl mb-4'>Find Us On</h1>
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
            <div className='bg-slate-100 my-5 p-4 space-y-5'>
                <h1 className='text-xl font-medium '>Q-Zone</h1>
                <img src={image} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightSide;