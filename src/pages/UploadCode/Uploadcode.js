import React, { useState } from "react"
import Navigation from "../../Designs/navigation/Navigation"
import "./../../Designs/Designs/Functions/popupEditor/popupElement.css"
import { VscCheck } from "react-icons/vsc";
import html from "../../Images/html.png"
import css from "../../Images/css.png"
import js from "../../Images/js.png"

export default function Uploadcode() {
    const [htmlCode, setHtml] = useState(null);
    const [cssCode, setCss] = useState(null);
    const [jsCode, setJs] = useState(null);
    const [active, setActive] = useState("html");



    return (
        <div>
            <section className="overflow-x-hidden bg-neutral-900 h-screen w-screen">
                <Navigation />
                <section className="flex space-x-10 w-screen">
                    <section className='w-1/5 h-screen bg-neutral-800'>
                        <div className='space-x-2 p-2'>
                            <span className='font-bold text-white'>Upload Code</span>
                        </div>
                        <hr className='border-neutral-600' />
                        <section className='py-4 m-1 outline-none'>
                            <div
                                onClick={() => setActive("html")}
                                className={` flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "html" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
                                <div>
                                    <img className='h-6 w-6 rounded' src={html} alt="" />
                                </div>
                                <div>
                                    <button className='text-white'>index.html</button>
                                </div>
                            </div>
                            <div
                                onClick={() => setActive("css")}
                                className={` flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "css" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
                                <div >
                                    <img className='h-6 w-6 rounded' src={css} alt="" />
                                </div>
                                <div>
                                    <button className='text-white'>style.css</button>
                                </div>
                            </div>
                            <div
                                onClick={() => setActive("js")}
                                className={` flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "js" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
                                <div>
                                    <img className='h-6 w-6 rounded' src={js} alt="" />
                                </div>
                                <div>
                                    <button className='text-white'>script.js</button>
                                </div>
                            </div>
                        </section>
                    </section>

                    <div className="w-11/12 pr-10">
                        <section className="my-2 flex justify-between">
                            <div className="flex justify-start text-white space-x-1 items-center">
                                <span className="text-xl text-fontBlue">user</span>
                                <span className="text-xl">/</span>
                                <span><input className="bg-transparent border border-borderColor p-1 rounded w-fit h-8 outline-none focus:ring focus:ring-fontBlue focus:outline-none" type="text" name="" id="" /></span>
                                <span>{<VscCheck className="text-xl text-fontBlue duration-200" />}</span>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <button>
                                        <input type="file" name="" id="" />
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <div>
                                    <textarea
                                        className={`border-2 p-2 w-full rounded resize-none border-neutral-800 text-white w-inherit ${active === "html" ? "block" : "hidden"} bg-inherit`}
                                        name=""
                                        id="textarea"
                                        rows="30"
                                        onChange={(event) => setHtml(event.target.value)}
                                    ></textarea>
                                </div>
                                <div>
                                    <textarea
                                        className={`border-2 p-2 w-full rounded resize-none border-neutral-800 text-white w-inherit ${active === "css" ? "block" : "hidden"} bg-inherit`}
                                        name=""
                                        id="textarea"
                                        rows="30"
                                        onChange={(event) => setCss(event.target.value)}
                                    ></textarea>
                                </div>
                                <div>
                                    <textarea
                                        className={`border border-custom-dark outline-hidden p-2 w-full rounded resize-none text-white w-inherit ${active === "js" ? "block" : "hidden"} bg-inherit`}
                                        name=""
                                        id="textarea"
                                        rows="30"
                                        onChange={(event) => setJs(event.target.value)}
                                    ></textarea>
                                </div>
                            </div>

                        </section>
                    </div>
                </section>
            </section>
        </div>
    )
}
