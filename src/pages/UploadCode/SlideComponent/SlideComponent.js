import React, { useState } from 'react'
import html from "../../../Images/html.png"
import css from "../../../Images/css.png"
import js from "../../../Images/js.png"


export default function SlideComponent() {
    const [active, setActive] = useState("js");
    return (
        <section className='w-1/5 h-screen bg-neutral-800'>
            <div className='space-x-2 p-2'>
                <span className='font-bold text-white'>Upload Code</span>
            </div>
            <hr className='border-neutral-600' />
            <section className='py-4 m-1 outline-none'>
                <div
                    onClick={() => setActive("html")}
                    className={`flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "html" ? "border border-neutral-900 bg-neutral-900 rounded" : ""} duration-300`}>
                    <div>
                        <img className='h-6 w-6 rounded' src={html} alt="" />
                    </div>
                    <div>
                        <button className='text-white'>index.html</button>
                    </div>
                </div>
                <div
                    onClick={() => setActive("css")}
                    className={`flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "css" ? "border border-neutral-900 bg-neutral-900 rounded" : ""} duration-300`}>
                    <div >
                        <img className='h-6 w-6 rounded' src={css} alt="" />
                    </div>
                    <div>
                        <button className='text-white'>style.css</button>
                    </div>
                </div>
                <div
                    onClick={() => setActive("js")}
                    className={`flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "js" ? "border border-neutral-900 bg-neutral-900 rounded" : ""} duration-300`}>
                    <div>
                        <img className='h-6 w-6 rounded' src={js} alt="" />
                    </div>
                    <div>
                        <button className='text-white'>script.js</button>
                    </div>
                </div>
            </section>

        </section>

    )
}