import React from 'react'
import testProfile from "./../test-image/test-profile.jpeg";
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
        {/* navigation will shown other page expect design  */}
        <header className='h-fit flex justify-between items-center bg-neutral-950 p-2 text-white pl-4 pr-4'>
            <div>
                <Link to="#">
                    <h1 className='font-extrabold tracking-wider'>Web Element</h1>
                </Link>
            </div>
            <div className='flex justify-between items-center space-x-4'>
                <div> <Link to="/">Home</Link> </div>
                <div> <Link to="/design">Design</Link> </div>
                <div> <Link to="/upload">Upload</Link> </div>
                <div>
                    <button>
                        <img src={testProfile} className='outline-white h-10 w-10 rounded-full outline' alt="cannot display profile" />
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}