import React from 'react'
import testProfile from "../../../test-image/test-profile.png";
import logo from "../../../test-image/logo.png";
import { Link } from 'react-router-dom';


export default function Navigation() {
    return (
        <nav className="h-12 w-full px-4 fixed bg-custom-black shadow-zinc-950 flex justify-between items-center border-b border-[#525252]">
            
            {/* logo section and dev control section */}
            <div>
                <Link to="/">
                    <img src={logo} className='h-8 w-fit cursor-pointer' alt="cannot display profile" />
                </Link>
            </div>

            {/* profile and basic web control section */}
            <div className='w-1/3 flex items-center justify-end space-x-4'>
                <div>
                    <button
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        title="host designed website"
                    >
                        Save
                    </button>
                </div>
                <div>
                    <button
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        title="host designed website"
                    >
                        Host
                    </button>
                </div>
                <div className='flex justify-between items-center'>
                    <button title="profile">
                        <img src={testProfile} className='outline-white h-9 w-9 rounded-full outline' alt="cannot display profile" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
