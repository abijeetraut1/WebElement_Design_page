import { useState } from "react";
import React from 'react'
import { FiSidebar } from "react-icons/fi";
import { MdFilterList, /* MdFilterListOff */} from "react-icons/md";
import testImage from "./../test-image/test-image.png";
import { useFetch } from "../../hooks/useFetch";

export default function Designs() {
    const [clicked, SetClicked] = useState("navigation");
    const {data:codes, isProtected, error} = useFetch("http://localhost:8000/api/v1/codes/extractCode", clicked.toLowerCase());

    // code storer
    const [navigationCode, setNavigationCode] = useState(null);
    const [heroCode, setHeroCode] = useState(null);
    const [bodyCode, setBodyCode] = useState(null);
    const [footerCode, setFooterCode] = useState(null);

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
                {/* <section className="my-4">
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
                </section> */}

                <section className="my-4">
                    {isProtected && <p>Fetching codes</p>}
                    {error && <p>server error please wait we are fixing it.</p>}
                    {codes && codes.map(code => (
                        <div key={code.carouselName.replaceAll(" ", "-")} className="bg-white p-2 my-4 rounded">
                            <div className="">
                                <img src={`http://localhost:8000/desktop/${code.desktopView}`} alt="Image not found"/>
                            </div>
                            <div className="bg-white py-3 ">
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <h3 className="font-bold">{code.carouselName}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-slate-500"><a href="#">Abijeet Raut</a></h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h4><span className="font-bold">Rating</span>: {code.rating}</h4>
                                        </div>
                                        <div>
                                            <h4><span className="font-bold">Used By: </span>: {code.usedBy}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-1">
                                    <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Rate
                                    </button>
                                    <button 
                                        className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => {
                                            if(clicked === "navigation"){
                                                console.log("Entered navigation")
                                                setNavigationCode({
                                                    html: code.htmlCode,
                                                    css: code.cssCode,    
                                                })
                                            }else if (clicked === "hero"){
                                                
                                                setHeroCode({
                                                    html: code.htmlCode,
                                                    css: code.cssCode,    
                                                })
                                                console.log("Entered hero")
                                                
                                            }else if (clicked === "body"){
                                                setBodyCode({
                                                    html: code.htmlCode,
                                                    css: code.cssCode,    
                                                })
                                                console.log("Entered body")
                                                
                                            }else if(clicked === "footer"){
                                                
                                                setFooterCode({
                                                    html: code.htmlCode,
                                                    css: code.cssCode,    
                                                })
                                                console.log("Entered footer")
                                            }
                                        }}
                                    >
                                        Use
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </aside>
            <section className="h-screen">
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>
                    {/* navigation section */}
                    <section dangerouslySetInnerHTML={{ __html: navigationCode ? navigationCode.html : "" }}></section>
                    <style dangerouslySetInnerHTML={ { __html: navigationCode ? navigationCode.css : "" } }></style>

                    {/* hero section */}
                    <section dangerouslySetInnerHTML={{ __html: heroCode ? heroCode.html : "" }}></section>
                    <style dangerouslySetInnerHTML={ { __html: heroCode ? heroCode.css : "" } }></style>

                    {/* body section */}
                    <section dangerouslySetInnerHTML={{ __html: bodyCode ? heroCode.html : "" }}></section>
                    <style dangerouslySetInnerHTML={ { __html: bodyCode ? bodyCode.css : "" } }></style>

                    {/* footer section */}
                    <section dangerouslySetInnerHTML={{ __html: footerCode ? footerCode.html : "" }}></section>
                    <style dangerouslySetInnerHTML={ { __html: footerCode ? footerCode.css : "" } }></style>
                </body>
                </html>
            </section>
        </section>
    )
};