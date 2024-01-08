import React from 'react';
import LOGO from "../../../Images/logo.webp";
import { Link } from 'react-router-dom';
import LoginForm from './components/Form/LoginForm';
import LoginSidebars from "./components/SlideBar/LoginSideBar"

export default function Login() {

    return (
        <section className="bg-white">
            <div className="flex min-h-screen">
                <div className="flex flex-row w-full">
                    <LoginSidebars />

                    <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                        <div className="flex lg:hidden justify-between items-center w-full py-4">
                            <Link className="flex w-fit items-center justify-start space-x-3">
                                <img className="w-10 h-8" alt='' src={LOGO} />
                                <p to="#" className="font-medium text-xl">WebElement</p>
                            </Link>
                            <Link href="/signup" className="font-medium text-[#fff]">
                                <button className="flex items-center justify-center bg-black flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                    Create account
                                </button>
                            </Link>
                        </div>

                        <div className="flex flex-1 flex-col  justify-center space-y-5 w-[50%]">
                            <div className="flex flex-col space-y-2 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">Login</h2>
                            </div>
                            <div>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
