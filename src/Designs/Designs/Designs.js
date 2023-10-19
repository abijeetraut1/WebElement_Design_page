import { useState } from "react";
import React from 'react'
import { FiSidebar } from "react-icons/fi";
import { VscFilterFilled, VscChromeClose, VscGripper, VscEdit, VscBold, VscItalic} from "react-icons/vsc";
import { useFetch } from "../../hooks/useFetch";

export default function Designs() {
    const [clicked, SetClicked] = useState("navigation");
    const {data:codes, isProtected, error} = useFetch("http://localhost:8000/api/v1/codes/extractCode", clicked.toLowerCase());
    
    
    const [storedCode, setStoreCode] = useState([]); // stroage clicked code
    const [activeEdit, setActiveEdit] = useState(true);  // bring the edit window to change the text
    const [clickedText, setClickedText] = useState(null);  // store clicked text content
    const [clickedHTMLElement, setclickedHTMLElement] = useState(null);

    function storeCodeToState(name, html, css, slug){
        setStoreCode((prevStoreCode) => [...prevStoreCode, { name, html, css, slug } ]);
    }

    function deleteCode(storedCodeObj, deleteEntityName) {
        setStoreCode(storedCodeObj.filter((el) => el.slug !== deleteEntityName));    
    }

    
    return (
        // side design choosing section
        <section>
            
            <aside className='l-0 overflow-auto max-h-full h-screen w-1/5 bg-gray-900 px-3 py-4 shadow-zinc-950 fixed top-0 left-0 z-1'>
                <br />
                <br /><br />
                <div className="sm:col-span-3">
                    <div className='flex items-center justify-between  space-x-2'>
                        <button className='border:solid border border-white p-2 rounded-md'>
                            {<FiSidebar className='text-white text-xl' />}
                        </button>
                        <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                            Test  Website
                        </div>  
                        
                        {
                            activeEdit 
                            ? 
                                <button className='border:solid border bg-white border-white p-2 rounded-md'
                                    onClick={() => setActiveEdit(false)}
                                >
                                    <VscEdit className=' bg-white text-inherit text-xl' />
                                </button>
                            : 
                                <button className='border:solid border border-white p-2 rounded-md'
                                    onClick={() => setActiveEdit(true)}
                                >
                                    <VscEdit className= 'text-white text-xl' />
                                </button>
                        }
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
                            <VscFilterFilled className="text-white text-xl"/> 
                        </button>
                    </div>
                    <div className="my-4 block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                        {clicked} Section
                    </div>
                </div>

                <section className="my-4">
                    {isProtected && <p>Fetching codes</p>}
                    {error && <p className="text-white">server error please wait we are fixing it.</p>}
                    {codes && codes.map(code => (
                        <div key={code.name.replaceAll(" ", "-")} className="bg-white p-2 my-4 rounded">
                            <div className="">
                                <img src={`http://localhost:8000/desktop/${code.desktopView}`} alt="Image not found"/>
                            </div>
                            <div className="bg-white py-3 ">
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <h3 className="font-bold capitalize">{code.name}</h3>
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
                                        onClick={() => storeCodeToState(code.name, code.htmlCode, code.cssCode, code.slug + "-" + Date.now())}
                                    >
                                        Use
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </aside>
            {/* <EditPopUpPanel /> */}

            <section id="extract-code" className="h-screen">
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </head>
                    <body id="edit-space">
                        {storedCode && storedCode.map((code, i) => (
                            <section key={i} className="">
                                <div className="flex flex-row w-full  items-center justify-center absolute z-50">
                                    <button className="py-1 px-6 bg-blue-500 flex items-center justify-center space-x-4">
                                        <VscGripper className="text-black "/>
                                        <VscChromeClose className="text-black" onClick={el => {
                                            deleteCode(storedCode, code.slug)
                                        }} />
                                    </button>
                                </div>
                                <div>
                                    <div 
                                        id={code.slug.replaceAll(" ", "-")}
                                        onClick={() => {
                                            const editSpace = document.getElementById("edit-space");
                                            editSpace.addEventListener('click', function(event) {
                                                setclickedHTMLElement(event.target);
                                                sessionStorage.setItem("clickedText", event.target.textContent);
                                            });
                                        }}
                                        dangerouslySetInnerHTML={{ __html: code.html }}
                                    ></div>
                                    <style dangerouslySetInnerHTML={ { __html: code.css } }></style>
                                </div>
                            </section>
                        ))}

                    </body>
                </html>
            </section>
            
            <aside className="l-0 overflow-auto max-h-full h-screen w-1/5 bg-gray-900 px-3 py-4 shadow-zinc-950 fixed top-0 right-0 z-1">
                <br /><br /><br />
                <div className="">
                    <div className="flex items-center space-x-2">
                        <button className='border:solid border border-white p-2 rounded-md'>
                            {<FiSidebar className='text-white text-xl' />}
                        </button>
                        <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                            {clickedText}
                        </div>
                    </div>

                    <section className="py-2">
                        <div>
                            <div className="flex items-center bolder space-x-2 py-2">
                                <div>
                                    <select name="" id="fontSize-changer" className="rounded-sm outline-none">
                                        <option value="8">8</option>
                                        <option value="12">12</option>
                                        <option value="14">14</option>
                                        <option value="16">16</option>
                                        <option value="18">18</option>
                                        <option value="20">20</option>
                                        <option value="24">24</option>
                                        <option value="26">26</option>
                                        <option value="28">27</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="p-1 border rounded-sm">
                                        <VscBold className="text-white font-semibold" />
                                    </button>
                                </div>
                                <div>
                                    <button className="p-1 border rounded-sm">
                                        <VscItalic className="text-white font-semibold" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input 
                                        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                                        type="text"
                                        placeholder={sessionStorage.getItem("clickedText")}
                                        name="search"
                                        onChange={(el) => {
                                            clickedHTMLElement.textContent = el.target.value;
                                        }}
                                    />
                                </div>
                                <div className="py-2">
                                    <button
                                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => {
                                            
                                        }}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </aside>
        </section>
    )
};