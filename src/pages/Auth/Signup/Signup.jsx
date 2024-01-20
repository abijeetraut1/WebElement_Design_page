import React from 'react';
import LOGO from "../../../Images/logo_design.svg";
import { Link } from 'react-router-dom';
import Sidebars from '../../Components/sidebars/Sidebars';
import SignupForm from './compoents/Form/SignupForm';
import "./css.css"

export default function Signup() {

    return (
        <section  id ="w3r-dot" className="bg-slate-300">
            <div className="flex min-h-screen">
                <div className="flex flex-row w-full">
                    <div>
                        <Sidebars props={{ sologon: "Let's Start", buttons: ["login"], highlight: "Effortless web development journey" }} />
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                        <div className="flex lg:hidden justify-between items-center w-full py-4">
                            <Link className="flex w-fit items-center justify-start space-x-3">
                                <img className="w-auto h-12" alt='' src={LOGO} />
                            </Link>
                            <Link to="/login" className="font-medium text-[#fff]">
                                <button className="flex items-center justify-center bg-black flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                    Login account
                                </button>
                            </Link>
                        </div>

                        <div className="flex flex-1 flex-col justify-center space-y-5 w-[40%]">
                            <div className="flex flex-col space-y-2 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">Sign up</h2>
                            </div>
                            <div >
                                <SignupForm />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
