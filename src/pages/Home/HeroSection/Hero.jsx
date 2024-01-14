import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBackgroundClipPath from '../../Components/backgroundClipPath/TopBackgroundClipPath';
import BottomBackgroundClipPath from '../../Components/backgroundClipPath/BottomBackgroundClipPath';


const websiteTypes = [
    { type: "E-Commerce", url: "/design" },
    { type: "Newsportal", url: "/design" },
    { type: "Portfolio", url: "/design" }
]

export default function Hero() {

    return (
        <section>
            <div className="relative isolate px-6 lg:px-8">
                
                <TopBackgroundClipPath/>

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{' '}
                            <Link to="/blogs" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1
                            style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #3498db, #2ecc71)' }}
                            className="capitalize text-4xl py-3 flex flex-col font-black tracking-tight text-gray-900 w-[120%] sm:text-6xl"
                        >
                            Design and host websites{" "}
                        </h1>
                        <h1 className="capitalize text-4xl flex flex-col font-bold tracking-tight text-gray-900 w-[120%] sm:text-6xl">
                            without anyfear
                        </h1>


                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Design
                            </Link>
                            <Link to="/about" className="text-sm font-semibold leading-6 text-indigo-600">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            {websiteTypes.map(websiteType => (
                                <Link
                                    to={"/"+websiteType.url}
                                >
                                    <button
                                        className="rounded-md ring-1 ring-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >{websiteType.type}</button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
                <BottomBackgroundClipPath/>
            </div>
        </section>
    )
}
