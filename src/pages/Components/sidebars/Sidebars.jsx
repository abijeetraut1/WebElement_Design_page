import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../../../Images/logo_design.svg";
import LOGOTEXT from "../../../Images/logo_text.svg";
// import testProfile from "../../../Images/test-profile.jpeg";

export default function Sidebars(props) {
    const { sologon, buttons, highlight } = props.props;

    return (
        <div className='hidden h-screen lg:flex flex-col justify-between bg-[#111827] text-white lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-xl xl:w-full ' >
            <Link to="/" className="flex w-fit items-center justify-start">
                <div>
                    <img className="w-auto h-12" alt='' src={LOGO} />
                </div>
                <div>
                    <img className="w-auto h-10" alt='' src={LOGOTEXT} />
                </div>
            </Link>
            <div className='space-y-5'>
                <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold capitalize text-white">{sologon}</h1>
                {highlight &&
                    <h1 id='highlight_text'
                        className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold capitalize"
                        style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #3498db, #2ecc71)' }}
                    >{highlight}</h1>
                }
                {/* <p className="text-lg text-white">You do not have an account?</p> */}
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex space-x-3'>
                    {buttons && buttons.map((button) => (
                        <Link
                            key={button}
                            className="inline-block flex-none border-2 rounded-lg font-medium border-black bg-black text-white"
                            to={`/${button}`}>
                            <button
                                className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                            >
                                {button === "signup" ? "Create account" : button === "login" ? "Get started" : ""}
                            </button>
                        </Link>
                    ))}
                </div>
                {/* <div>
                    <div className='border-4 rounded-full border-white cursor-pointer'>
                        <img className='h-auto w-12 rounded-full' src={testProfile} alt="test-profile" />
                    </div>
                </div> */}
                <div>
                    <Link to="/" className="font-medium text-white">© {new Date().getFullYear()} webelement</Link>
                </div>

            </div>
        </div>
    )
}
