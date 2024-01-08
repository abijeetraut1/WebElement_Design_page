import React from 'react';
import LOGO from "../../../Images/logo.webp";
import { Link } from 'react-router-dom';
import Form from '../Components/Form/Form';
import SideBar from '../Components/SlideBar/SideBar';

export default function Login() {

    return (
        <section className="bg-white">
            <div className="flex min-h-screen">
                <div className="flex flex-row w-full">
                    <SideBar/>

                    <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                        <div className="flex lg:hidden justify-between items-center w-full py-4">
                            <Link className="flex w-fit items-center justify-start space-x-3">
                                <img className="w-10 h-8" alt='' src={LOGO} />
                                <p to="#" className="font-medium text-xl">WebElement</p>
                            </Link>
                            <Link href="#" className="font-medium text-[#fff]">
                                <button className="flex items-center justify-center bg-black flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                    Create account
                                </button>
                            </Link>
                        </div>

                        <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                            <div className="flex flex-col space-y-2 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">Sign in</h2>
                                <p className="text-md md:text-xl">Sign up or log in to place the order, no password require!</p>
                            </div>
                            <div>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
