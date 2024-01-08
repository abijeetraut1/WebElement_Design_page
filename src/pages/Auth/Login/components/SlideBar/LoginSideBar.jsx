import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../../../../../Images/logo.webp";

export default function SideBar() {
    return (
        <div className='hidden lg:flex flex-col justify-between bg-[#111827] text-white lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
            <Link to="/" className="flex w-fit items-center justify-start space-x-3">
                <img className="w-10 h-8" alt='' src={LOGO} />
                <p to="#" className="font-medium text-xl">WebElement</p>
            </Link>
            <div className='space-y-5'>
                <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold capitalize">Enter your account and ease your webdev journey</h1>
                <p className="text-lg">You do not have an account?</p>
                <Link
                    className="inline-block flex-none border-2 rounded-lg font-medium border-black bg-black text-white"
                    to="/signup">
                    <button
                        className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                    >
                        Create account
                    </button>
                </Link>
            </div>

            <Link to="/" className="font-medium">© 2022 webelement</Link>
        </div>
    )
}
