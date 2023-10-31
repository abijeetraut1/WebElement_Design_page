import React, {useState} from 'react'
import { FiSidebar } from "react-icons/fi";
import { Link } from 'react-router-dom';
import testProfile from "../test-image/test-profile.jpeg"

export default function DrawAWebSite() {
    const [open, setOpen] = useState(true);

  return (
    <section>
        <aside className={`fixed top-0 left-0 ${open ? "w-1/5 bg-zinc-900" : "w-0 bg-transparent" } duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100 `} >
            <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                <div className='flex items-center justify-between space-x-2'>
                    <div className="flex items-center justify-between space-x-2">
                        <button
                            className='border:solid border border-white bg-zinc-900 p-2 rounded-md'
                            onClick={() => setOpen(open ? false : true)}
                        >
                            {<FiSidebar className= 'text-white text-xl ' />}
                        </button>
                        {open && 
                            <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                                Test  Website
                            </div>
                        } 
                    </div>
                    {open && 
                        <div className="flex space-x-1">
                            <div>
                                <button
                                    className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                >
                                    Save
                                </button>
                            </div>
                            <Link to="/export">
                                <button
                                    className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                >
                                    Export
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            
            {open && <section className="py-3 fiexed bottom-0">
                <div className="flex items-center space-x-2 justify-between">
                    <div className="flex items-center space-x-3">
                        <div>
                            <button>
                                <img src={testProfile} className='outline-white h-10 w-10 rounded-full outline' alt="cannot display profile" />
                            </button>
                        </div>
                        <div>
                            <span className="text-white cursor-pointer">Abijeet Raut</span>
                        </div>
                    </div>
                </div>
            </section>} 
        </aside>

        <canvas id='canvas' className="h-screen w-screen border-4 border-black" ></canvas>
        
    </section>
  )
}
