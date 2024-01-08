import React from 'react';
import { Link } from 'react-router-dom';
import webelementlogo from "../../../Images/logo.webp";

export default function Navigation() {
    return (
        <div className='flex justify-between px-5 py-2 text-white font-semibold'>
            <div className='flex flex-row justify-center'>
                <div className='h-12 w-20'>
                    <img src={webelementlogo} alt="" />
                </div>
                <div>
                    <Link className='font-extrabold text-4xl' to="/"> WEBELEMENT </Link>
                </div>
            </div>
            <div className='flex space-x-6'>
                <div className='flex space-x-10'>
                    <div>
                        <Link to="/Pricing"> Pricing </Link>
                    </div>
                    <div>
                        <Link to="/developers"> Developers </Link>
                    </div>
                    <div>
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                    <div>
                        <Link to="/login">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
