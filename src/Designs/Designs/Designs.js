import { useState } from "react";
import React from 'react'
import { FiSidebar } from "react-icons/fi";
import { MdFilterList, /* MdFilterListOff */ } from "react-icons/md";
import testImage from "./../test-image/test-image.png";

export default function Designs() {
    const [clicked, SetClicked] = useState("Navigation");

  return (
    <section>
        <aside className='max-h-full h-screen w-1/5 bg-slate-800 px-3 py-1 z-999'>
            <div className="sm:col-span-3">
                <div className='flex items-center justify-between  space-x-2'>
                    <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                        {clicked} Section
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
                            className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={el => {SetClicked(el.target.value)}}
                        >
                            <option value="navigation" selected>Navigation Section</option>
                            <option value="hero">Hero Section</option>
                            <option value='body'>Body Section</option>
                            <option value="footer">Footer Section</option>
                        </select>
                    </div>
                    <button className="border:solid border border-white p-2 rounded-md">
                        <MdFilterList  className="text-white text-xl"/>
                    </button>
                 </div>
            </div>

           <section className="my-1">
                <div>
                    <div className="">
                        <img src={testImage} alt="Image not found" className="rounded"/>
                    </div>
                </div>
           </section>
        </aside>
    </section>
  )
}
