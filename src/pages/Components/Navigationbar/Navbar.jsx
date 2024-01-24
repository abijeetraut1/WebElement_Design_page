import React from 'react';
import LOGO from "./../../../Images/logo_design.svg";
import LOGOTEXT from "./../../../Images/logo_text.svg";
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import Buttons from '../Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMobileSlideBarOpen } from '../../../reduxFunction/PageControls/pageControls';

const navigation = [
    { name: 'Design', href: '/design' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Host', href: '/host' },
    { name: 'Developers', href: '/developers' },
    { name: 'Blogs', href: '/blogs' },
]


export default function Navbar() {
    const dispatch = useDispatch();
    const mobileMenuOpen = useSelector(state => state.pageControls.isMobileSlideBarOpen);

    return (
        <header className='w-full'>
            <nav className="px-2 flex items-center justify-between sm:py-0 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="flex items-center -m-1.5 p-1.5">
                        <div>
                            <img
                                className="h-14 w-auto"
                                src={LOGO}
                                alt=""
                            />
                        </div>
                        <div className='hidden lg:block'>
                            <img
                                style={{ filter: "brightness(0.3)" }}
                                className="h-8 w-auto"
                                src={LOGOTEXT}
                                alt=""
                            />
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="text-base cursor-pointer font-bold leading-6 text-gray-600">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex space-x-2">
                        <Buttons />
                    </div>
                </div>

                <div className="flex items-center justify-center lg:hidden duration-300">
                    <button
                        type="button"
                        className="z-50 -m-2.5 rounded-md h-full p-2.5 text-black "
                        onClick={() => dispatch(setIsMobileSlideBarOpen())}
                    >
                        <HiMenu className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
            </nav>


            <nav className={`block lg:hidden ${mobileMenuOpen ? "w-full duration-300" : "hidden w-0 duration-300"} h-screen bg-slate-400 absolute z-40 top-0 right-0`}>
                <div className='flex flex-col absolute top-14 px-4 space-y-3 w-full'>
                    <div>
                        {mobileMenuOpen && <div className="font-semibold text-left flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link key={item.name} to={item.href}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>}
                    </div>

                    {mobileMenuOpen && <div className='border-t-2 border-white w-full'></div>}
                    
                    <div >
                        <div className='overflow-hidden'>
                            {mobileMenuOpen && <Buttons className="w-full"  />}
                        </div>
                    </div>
                </div>

            </nav>

        </header>
    )
}
