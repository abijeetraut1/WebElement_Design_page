import React from 'react';
import { FiSidebar } from "react-icons/fi";


export default function EditDesign() {
  return (
    <div>
        <aside className='l-0 overflow-auto max-h-full h-screen w-1/5 bg-gray-900 px-3 py-4 shadow-zinc-950 fixed top-0 right-0 z-1'>
            <br /><br /><br />
            <div className="sm:col-span-3">
                <div className='flex items-center justify-between  space-x-2'>
                    <button className='border:solid border border-white p-2 rounded-md'>
                        {<FiSidebar className='text-white text-xl' />}
                    </button>
                    <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                        Design Section
                    </div>  
                </div>
            </div>
        </aside>
    </div>
  )
}
