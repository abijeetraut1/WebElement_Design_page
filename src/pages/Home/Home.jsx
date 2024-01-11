import React from 'react';
import Sidebars from '../Components/sidebars/Sidebars';
import { Link } from 'react-router-dom';
import LOGO from "../../Images/logo_design.svg";
import background from "../../Images/test-designed.png";

export default function Home() {
    return (
        <section className=" ">
            <div className="bg-[#141D2B] flex flex-col">
                <div className="flex flex-row">
                    <Sidebars props={{ sologon: "We Reduce, The Complexity of ", buttons: ["signup"], highlight: "Web Development" }} />

                    <div className="lg:hidden flex flex-1 flex-col items-center justify-center px-10 relative">
                        <div className="flex lg:hidden justify-between items-center w-full py-4">
                            <div>
                                <Link className="flex w-fit items-center justify-start space-x-3">
                                    <img className="w-auto h-12" alt='' src={LOGO} />
                                </Link>
                            </div>

                            <div className='space-x-3 hidden sm:block'>
                                <Link className='font-semibold text-white'>
                                    Blogs
                                </Link>
                                <Link className='font-semibold text-white'>
                                    Documentation
                                </Link>
                            </div>

                            <div>
                                <Link href="/signup" className="font-medium text-[#fff]">
                                    <button className="flex items-center justify-center bg-black flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                        Create account
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex h-screen flex-col w-full items-center'>
                    <div className="flex h-screen flex-1 justify-center items-center flex-col space-y-5 w-[80%] xl:w-[40%] md:w-[50%]">
                        <div className="flex justify-start flex-col space-y-3">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white capitalize">affortable, Effective and fastest</h2>
                            </div>
                            <div>
                                <h1
                                    style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #3498db, #2ecc71)' }}
                                    className="text-4xl md:text-4xl font-black text-white capitalize">
                                    Developing and hosting websites
                                </h1>
                            </div>
                            <div>
                                <p className='text-[#617FAD] sm:text-justify md:text-justify'>we provide component based  component template based editing and hosting service for fastest and cheapest method for developing website multilevel e-commerce, news portal and portfolio website with integrated AI.</p>
                            </div>

                            <div className='space-x-3'>
                                <Link
                                    to="/design"
                                >
                                    <button
                                        className="w-fit rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Design
                                    </button>
                                </Link>
                                <Link
                                    to="/design"
                                >
                                    <button
                                        className="w-fit rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Upload
                                    </button>
                                </Link>
                                <Link
                                    to="/design"
                                >
                                    <button
                                        className="w-fit rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Host
                                    </button>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>

                {/* <div className='flex h-screen flex-col w-full items-center'>
                    <div className="flex h-screen flex-1 justify-center items-center flex-col space-y-5 w-[80%] xl:w-[40%] md:w-[50%]">
                        <div className="flex justify-start flex-col space-y-3">
                            
                        </div>


                    </div>
                </div> */}
            </div>
        </section>
    )
}
