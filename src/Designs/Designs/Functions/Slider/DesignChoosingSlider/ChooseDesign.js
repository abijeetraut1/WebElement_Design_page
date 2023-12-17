import { FiSidebar } from "react-icons/fi";
import { ImSpinner3 } from "react-icons/im";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Extraction } from "./../../Extraction/Extraction";
import { storeCodes, clearPreviousCodeOnDOM } from "../../../../../reduxFunction/storeUsedCode/StoreCodeSlice";
import { storeHomePageCode } from "../../../../../reduxFunction/StorePageCode/StorePageCode";
import { useFetch } from '../../../../../hooks/GetRequest/useFetch';
import { Render } from '../../Render/Render';
import { setHostingPannelActive, setDesignPage, setDesignSection } from '../../../../../reduxFunction/PageControls/pageControls';

import testProfile from "../../../../test-image/test-profile.jpeg";
import ai from "../../../../../Images/ai.png";

export default function ChooseDesign() {
    const designPage = useSelector(state => state.pageControls.designPage);
    const section = useSelector(state => state.pageControls.designSection);
    const [open, setOpen] = useState(true);  // for choose design pannel determine close or open
    const [isSping, setIsSpin] = useState(false);
    const { data: codes, isProtected, error } = useFetch(`${process.env.REACT_APP_CODE_API_URL}=${section.toLowerCase()}`, "GET", "codes");

    const dispatch = useDispatch();

    // codes ids 
    const home = useSelector(state => state.StoreCodeSlice.homeIDs);
    const about = useSelector(state => state.StoreCodeSlice.aboutIDs);
    const contact = useSelector(state => state.StoreCodeSlice.contactIDs);
    const authentication = useSelector(state => state.StoreCodeSlice.authenticationIDs);

    const homePage = useSelector(state => state.StorePageCode.home);
    const aboutPage = useSelector(state => state.StorePageCode.about);
    const contactPage = useSelector(state => state.StorePageCode.contact);
    const loginPage = useSelector(state => state.StorePageCode.authentication);


    // save code function
    function saveCodes() {
        let extractedCodes;
        if (designPage === "home") {
            extractedCodes = Extraction(home);
        } else if (designPage === "contact") {
            extractedCodes = Extraction(contact);
        } else if (designPage === "about") {
            extractedCodes = Extraction(about);
        } else if (designPage === "login") {
            extractedCodes = Extraction(authentication);
        }

        dispatch(storeHomePageCode({ code: extractedCodes, section: designPage }));
    }

    useEffect(() => {
        if (isSping === true) {
            setTimeout(() => {
                setIsSpin(false);
            }, 3000)
        }
    }, [isSping]);

    return (
        <div>
            <aside className={`fixed top-0 left-0 ${open ? "w-1/5 bg-zinc-900" : "w-0 bg-transparent"} duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100 `} >
                <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                    <div className='flex items-center justify-between space-x-2'>
                        <div className="flex items-center justify-between space-x-2">
                            <button
                                className='border:solid border border-white bg-zinc-900 p-2 rounded-md'
                                onClick={() => setOpen(open ? false : true)}
                            >
                                {<FiSidebar className='text-white text-xl ' />}
                            </button>

                            {open &&
                                <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                                    Web Element
                                </div>
                            }
                        </div>

                        {open &&
                            <div className="flex space-x-1">
                                <div>
                                    <button
                                        className="flex items-center space-x-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => {
                                            setIsSpin(true);
                                            saveCodes();
                                        }}
                                    >
                                        {
                                            isSping === true ? <div className="animate-spin"> <ImSpinner3 /> </div> : <div>Save</div>
                                        }
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    {open &&
                        <div className="space-y-1">
                            <div className="flex items-center justify-center space-x-1 mt-2">
                                <div>
                                    <select
                                        id="web-section"
                                        name="web-section"
                                        autoComplete="web-section"
                                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 outline-none font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        onChange={el => {
                                            dispatch(setDesignSection(el.target.value))
                                        }} // section choose name
                                    >
                                        <option value="navigation" selected>Navigation Section</option>
                                        <option value="hero">Hero Section</option>
                                        <option value='body'>Body Section</option>
                                        <option value="footer">Footer Section</option>
                                        <option value="webpage" >Complete Website</option>
                                        <option value="login" >Login</option>
                                    </select>
                                </div>
                                <button className="h-fit w-fit rounded-md">
                                    <img src={ai} alt="ai_image_load_failed" />
                                </button>
                            </div>
                            <div>
                                <select name="" id=""
                                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 outline-none font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    onChange={(el) => {
                                        dispatch(setDesignPage(el.target.value));
                                        saveCodes();

                                        if (!homePage) return;

                                        if (el.target.value === "home") {
                                            Render(el.target.value, home, homePage);
                                        } else if (el.target.value === "about") {
                                            Render(el.target.value, about, aboutPage);
                                        } else if (el.target.value === "contact") {
                                            Render(el.target.value, contact, contactPage);
                                        } else if (el.target.value === "login") {
                                            Render(el.target.value, authentication, loginPage);
                                        }
                                        dispatch(clearPreviousCodeOnDOM());
                                    }}
                                >
                                    <option value="home">Home</option>
                                    <option value="about">About</option>
                                    <option value='contact'>Contact</option>
                                    <option value="login">Login</option>
                                </select>
                            </div>
                        </div>
                    }
                    {open && <div className="my-4 block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                        {section} Section
                    </div>}
                </div>

                {open && <section id="choose-deign" className="h-3/4 overflow-auto rounded-md">
                    {isProtected && <p>Fetching codes</p>}
                    {error && <p className="text-white">server error please wait we are fixing it.</p>}
                    {codes && codes.map((code, i) => (
                        <div key={code.name.replaceAll(" ", "-")} className="bg-white p-2 my-4 rounded" >
                            <div className="">
                                <img src={`${process.env.REACT_APP_IMAGE_URL}/${JSON.parse(code.images)[0]}`} alt="image_cannot_be_shown" />
                            </div>
                            <div className="bg-white py-3 ">
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <h3 className="font-bold capitalize">{code.name}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-slate-500 cursor-pointer">Abijeet Raut</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h4><span className="font-bold">Rating</span>: {code.rating}</h4>
                                        </div>
                                        <div>
                                            <h4><span className="font-bold">Used By: </span>: {code.usedBy}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-1">
                                    <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Rate
                                    </button>
                                    <button
                                        className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => {
                                            dispatch(storeCodes({ name: code.name, html: code.htmlCode, css: code.cssCode, js: code.jsCode, type: code.type, slug: code.slug, pageName: designPage }))
                                        }}
                                    >
                                        Use
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>}

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
                        <div>
                            <button
                                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => dispatch(setHostingPannelActive(true))}
                            >
                                Host
                            </button>
                        </div>
                    </div>
                </section>}
            </aside>
        </div>
    )
}
