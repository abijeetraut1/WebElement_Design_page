import React, { useState } from 'react'
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { setHostingPannelActive } from '../../../../reduxFunction/PageControls/pageControls';
import axios from 'axios';

export default function HostingIdendity() {
    const dispatch = useDispatch();
    const [siteName, setSiteName] = useState("");

    // pages codes
    const homePageCode = useSelector(state => state.StorePageCode.home);
    const aboutPageCode = useSelector(state => state.StorePageCode.about);
    const contactPageCode = useSelector(state => state.StorePageCode.contact);
    const authentication = useSelector(state => state.StorePageCode.authentication);

    async function saveTheCodes() {
        try {
            console.log(homePageCode.codes)
            const sendHostCodes = await axios({
                method: "POST",
                url: "http://127.0.0.1:8000/api/v1/hosting/hostcodes",
                data: {
                    webPageName: siteName,
                    home: homePageCode.codes,
                    about: aboutPageCode.codes,
                    contact: contactPageCode.codes,
                    authentication: authentication.codes
                }
            })

            console.log(sendHostCodes)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className='transition-300 drop-shadow-xl h-screen w-screen bg-slate-400 flex items-center justify-center font-extrabold'>
            <div className='rounded bg-white '>
                <div className='w-full flex justify-end p-1'>
                    <button onClick={() => dispatch(setHostingPannelActive(false))} className='rounded-3xl bg-gray-500 p-1 text-white'><VscChromeClose /></button>
                </div>
                <div className='space-y-5 p-20 text-gray-600'>
                    <div >
                        <h1 className='text-4xl'>Host Site</h1>
                        <h5>And Start Engaging With Yours Customers. </h5>
                    </div>
                    <div>
                        <label htmlFor="site-name" className='text-sm'>Enter Domain Name</label>
                        <input
                            type="text"
                            name="site-name"
                            id="site-name"
                            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                            onInput={(el) => { setSiteName(el.target.value) }}
                        />
                        <label className='text-sm'><span>{siteName.replace(" ", "-")}</span><span>.webelement.com</span></label>
                    </div>
                    <div>
                        <button
                            className="w-full rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => {
                                saveTheCodes();
                                dispatch(setHostingPannelActive(false));
                            }}
                        >
                            Host
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}