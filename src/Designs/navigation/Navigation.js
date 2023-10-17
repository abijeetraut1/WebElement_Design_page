import React from 'react'
import testProfile from "./../test-image/test-profile.jpeg";
import {AiOutlineDesktop, AiOutlineMobile, AiOutlineTablet} from "react-icons/ai"

export default function Navigation() {
  return (
    <div>

        {/* navigation will shown other page expect design  */}
        <header className='hidden h-fit flex justify-between items-center bg-slate-800 p-4 text-white'>
            <div>
                <a href="#">
                    <h1 className='font-extrabold tracking-wider'>WEB-X-LOGO</h1>
                </a>
            </div>
            <div className='flex justify-between space-x-4'>
                <button
                    className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Register
                </button>
            </div>
        </header>

        {/* size refactor and export code section */}
        {/* this navigation will be displayed on editor windowc:\Users\Abijeet\Downloads\WhatsApp Image 2023-09-10 at 9.06.00 PM.jpeg */}
        <header className='h-fit flex justify-between items-center bg-gray-900 p-4 text-white z-50' > 
            <div>
                <a href="#">
                    <h1 className='font-extrabold tracking-wider'>WEB-X-LOGO</h1>
                </a>
            </div>
            <div className='flex content-center items-center space-x-4'>
                <button>
                    <AiOutlineDesktop className='text-3xl'/>
                </button>
                <button>
                    <AiOutlineMobile className='text-3xl'/>
                </button>
                <button>
                    <AiOutlineTablet className='text-3xl'/>
                </button>
            </div>
            <div className='flex justify-between space-x-4'>                
                <div>
                    <button
                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>

                <div>
                    <button
                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Host
                    </button>
                </div>

                <div>
                    <button
                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Export
                    </button>
                </div>

                <div>
                    <button>
                        <img src={testProfile} className='h-10 w-10 rounded-full outline' alt="cannot display profile" />
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}