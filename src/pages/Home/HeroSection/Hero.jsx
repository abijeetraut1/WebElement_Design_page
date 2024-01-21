import React from 'react';
import { Link } from 'react-router-dom';
import templateImage from "../../../Images/shoes.png";
import "./style.css";
import { setIsMobileSlideBarOpen } from '../../../reduxFunction/PageControls/pageControls';
import { useDispatch, useSelector } from 'react-redux';


const websiteTypes = [
    { type: "E-Commerce", url: "/design" },
    { type: "Newsportal", url: "/design" },
    { type: "Portfolio", url: "/design" }
]

export default function Hero() {
    const mobileMenuOpen = useSelector(state => state.pageControls.isMobileSlideBarOpen);

    return (
        <section>
            <div className={`relative isolate ${mobileMenuOpen ? "blur-sm duration-300" : "blur-0"}`}>
                <div id='dotgrids' className="mx-auto w-full py-32 sm:py-48 lg:py-56 sm:px-6 lg:px-8">
                    <div className="w-auto m-auto sm:mb-4 flex justify-center">
                        <div className="w-fit flex relative bg-slate-300 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/25 hover:ring-gray-900/20">
                            Announcing <pre className='hidden sm:block'> our next round of funding. </pre>
                            <Link to="/blogs" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1
                            className="capitalize text-3xl py-2 sm:py-3 flex flex-col font-black tracking-tight text-gray-900 sm:text-6xl"
                        >
                            Design and host websites{" "}
                        </h1>
                        <h1 className="capitalize text-3xl flex flex-col font-black tracking-tight text-gray-900 sm:text-6xl">
                            without any fear
                        </h1>

                        <p className="mt-2 sm:mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-4 sm:mt-10 flex items-center justify-center gap-x-2 sm:gap-x-6">
                            <Link
                                to="/design"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Design
                            </Link>
                            <Link to="/about" className="text-sm font-semibold leading-6 text-indigo-600">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        <div className="mt-4 sm:mt-10 flex items-center justify-center gap-x-2 sm:gap-x-6">
                            {websiteTypes.map(websiteType => (
                                <Link
                                    to={"/" + websiteType.url}
                                >
                                    <button
                                        className="rounded-md ring-1 ring-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >{websiteType.type}</button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='bg-blue-500 flex justify-center '>
                        <img src={templateImage} className='select-none ' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
