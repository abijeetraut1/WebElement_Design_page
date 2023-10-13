import { useState } from "react";
import React from 'react'
import { FiSidebar } from "react-icons/fi";
import { MdFilterList, /* MdFilterListOff */} from "react-icons/md";
import testImage from "./../test-image/test-image.png";

export default function Designs() {
    const [clicked, SetClicked] = useState("Navigation");

    return (
        // side design choosing section
        <section>
            <aside className='l-0 overflow-auto max-h-full h-screen w-1/5 bg-gray-900 px-3 py-4 shadow-zinc-950 fixed top-0 left-0 z-60'>
                <br />
                <br />
                <br />
                <div className="sm:col-span-3">
                    <div className='flex items-center justify-between  space-x-2'>
                        <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                            Test  Website
                        </div>  
                        <button className='border:solid border border-white p-2 rounded-md'>
                            {<FiSidebar className='text-white text-xl' />}
                        </button>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-2">
                        <div>
                            <select
                                id="web-section"
                                name="web-section"
                                autoComplete="web-section"
                                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 outline-none font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                onChange={el => {SetClicked(el.target.value)}} // section choose name
                            >
                                <option value="navigation" selected>Navigation Section</option>
                                <option value="hero">Hero Section</option>
                                <option value='body'>Body Section</option>
                                <option value="footer">Footer Section</option>
                            </select>
                        </div>
                        <button className="border:solid border border-white p-2 rounded-md">
                            <MdFilterList className="text-white text-xl"/> 
                        </button>
                    </div>
                    <div className="my-4 block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                        {clicked} Section
                    </div>
                </div>

                {/* choosing section wil be list here */}
                <section className="my-4">
                    <div className="bg-white p-2 my-4 rounded">
                        <div className="">
                            <img src={testImage} alt="Image not found"/>
                        </div>
                        <div className="bg-white py-3 ">
                            <div className="flex justify-between">
                                <div>
                                    <div>
                                        <h3 className="font-bold">The Carousel</h3>
                                    </div>
                                    <div>
                                        <h5 className="text-slate-500"><a href="#">Abijeet Raut</a></h5>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4><span className="font-bold">Rating</span>: 123456</h4>
                                    </div>
                                    <div>
                                        <h4><span className="font-bold">Used By: </span>: 123456</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Rate
                                </button>
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Use
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-2 my-4 rounded">
                        <div className="">
                            <img src={testImage} alt="Image not found"/>
                        </div>
                        <div className="bg-white py-3 ">
                            <div className="flex justify-between">
                                <div>
                                    <div>
                                        <h3 className="font-bold">The Carousel</h3>
                                    </div>
                                    <div>
                                        <h5 className="text-slate-500"><a href="#">Abijeet Raut</a></h5>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4><span className="font-bold">Rating</span>: 123456</h4>
                                    </div>
                                    <div>
                                        <h4><span className="font-bold">Used By: </span>: 123456</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Rate
                                </button>
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Use
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-2 my-4 rounded">
                        <div className="">
                            <img src={testImage} alt="Image not found"/>
                        </div>
                        <div className="bg-white py-3 ">
                            <div className="flex justify-between">
                                <div>
                                    <div>
                                        <h3 className="font-bold">The Carousel</h3>
                                    </div>
                                    <div>
                                        <h5 className="text-slate-500"><a href="#">Abijeet Raut</a></h5>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4><span className="font-bold">Rating</span>: 123456</h4>
                                    </div>
                                    <div>
                                        <h4><span className="font-bold">Used By: </span>: 123456</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Rate
                                </button>
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Use
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-2 my-4 rounded">
                        <div className="">
                            <img src={testImage} alt="Image not found"/>
                        </div>
                        <div className="bg-white py-3 ">
                            <div className="flex justify-between">
                                <div>
                                    <div>
                                        <h3 className="font-bold">The Carousel</h3>
                                    </div>
                                    <div>
                                        <h5 className="text-slate-500"><a href="#">Abijeet Raut</a></h5>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4><span className="font-bold">Rating</span>: 123456</h4>
                                    </div>
                                    <div>
                                        <h4><span className="font-bold">Used By: </span>: 123456</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Rate
                                </button>
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Use
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </aside>
        </section>
    )
};