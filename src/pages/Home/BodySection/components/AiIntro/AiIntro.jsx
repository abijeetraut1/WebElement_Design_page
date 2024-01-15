import React from 'react';
import { Link } from 'react-router-dom';


export default function AiIntro() {
    return (
        <section className=' bg-black w-full h-screen flex items-center'>
            <div className="text-left mx-20 pt-32 pb-32 w-1/2">
                <div className='pb-14 space-y-6'>
                    <div >
                        <heading className="capitalize text-4xl flex flex-col font-light tracking-tight text-slate-300 sm:text-5xl">
                            {/* Designers <br /> Tired Of Designing <br /> Webpage Twice */}
                            Design Once, <br /> Code Never: <br /> Empowering Designers with <br /> CodeBro
                        </heading>
                    </div>
                    
                    <div>
                        <Link
                            to="/upload"
                        >
                            <button
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                command
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='text-gray-900 text-justify flex flex-row flex-wrap'>

                </div>
            </div>

            <div className="m-20 bg-slate-600 w-1/2">
            </div>
        </section>
    )
}
