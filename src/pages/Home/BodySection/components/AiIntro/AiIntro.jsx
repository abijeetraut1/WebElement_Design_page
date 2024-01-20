import React from 'react';
import { Link } from 'react-router-dom';

export default function AiIntro() {
    return (
        <section className='bg-black p-2 w-full flex flex-col justify-center'>
            <section className='mx-4 space-y-5 my-20'>
                <div className="text-left sm:mx-20">
                    <div>
                        <heading className="capitalize text-3xl flex flex-col font-light tracking-tight text-white sm:text-5xl">
                            Design Once, Code Never <br />  Empowering Designers <br /> with AI
                        </heading>
                    </div>
                </div>
                <div>
                    <Link
                        to="/upload"
                    >
                        <button
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            command
                        </button>
                    </Link>
                </div>
            </section>
        </section>
    )
}