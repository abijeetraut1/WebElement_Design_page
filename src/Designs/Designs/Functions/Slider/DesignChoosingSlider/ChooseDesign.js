import { FiSidebar } from "react-icons/fi";
import { ImSpinner3 } from "react-icons/im";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Extraction } from "./../../Extraction/Extraction";
// import { storeCodes } from "../../../../../reduxFunction/storeUsedCode/StoreCodeSlice";
import { storeHomePageCode } from "../../../../../reduxFunction/StorePageCode/StorePageCode";
import { useFetch } from '../../../../../hooks/GetRequest/useFetch';
import { setHostingPannelActive, setPage } from '../../../../../reduxFunction/PageControls/pageControls';
import testProfile from "../../../../test-image/test-profile.jpeg";
// import ai from "../../../../../Images/ai.png";
import DesignControls from "../DesignControls/DesignControl";
import Filter from "../Filter/Filter";
import { fetchSigleCode } from "../../FetchSingle/FetchSingle";
import {setFetchedCodes, storeCodes} from "../../../../../reduxFunction/storeUsedCode/StoreCodeSlice";

export default function ChooseDesign(clickedItem) {
    const designPage = useSelector(state => state.pageControls.designPage);
    const section = useSelector(state => state.pageControls.designSection);
    const page = useSelector(state => state.pageControls.isPage);
    const isFilterActive = useSelector(state => state.pageControls.isFilterActive);

    const [isSping, setIsSpin] = useState(false);
    const [open, setOpen] = useState(true);  // for choose design pannel determine close or open

    const [url, setUrl] = useState(`${process.env.REACT_APP_CODE_API_URL}?section=${section.toLowerCase()}&page=${page}`);
    const dispatch = useDispatch();

    const { data, isProtected, error } = useFetch(`${process.env.REACT_APP_CODE_API_URL}?section=${section.toLowerCase()}&page=${page}`, "GET", "codes");
    const codes = useSelector(state => state.StoreCodeSlice.fetchedCodes);

    useEffect(() => {
        if (!data) return;
        dispatch(setFetchedCodes(data));
    }, [data, dispatch]);

    // codes ids 
    const home = useSelector(state => state.StoreCodeSlice.homeIDs);
    const about = useSelector(state => state.StoreCodeSlice.aboutIDs);
    const contact = useSelector(state => state.StoreCodeSlice.contactIDs);
    const authentication = useSelector(state => state.StoreCodeSlice.authenticationIDs);

    // save code function
    function saveCodes() {
        let extractedCodes;
        if (designPage === "home") {
            console.log("first")
            extractedCodes = Extraction(home);
        } else if (designPage === "contact") {
            extractedCodes = Extraction(contact);
        } else if (designPage === "about") {
            extractedCodes = Extraction(about);
        } else if (designPage === "login") {
            extractedCodes = Extraction(authentication);
        }

        console.log(extractedCodes)
        dispatch(storeHomePageCode({ code: extractedCodes, section: designPage }));
    }

    useEffect(() => {
        if (isSping === true) {
            setTimeout(() => {
                setIsSpin(false);
            }, 3000)
        }
    }, [isSping]);

    useEffect(() => {
        setUrl(`${process.env.REACT_APP_CODE_API_URL}?section=${section.toLowerCase()}&page=${page}`);
    }, [page, url, section]);

    async function renderCodes(slug, section) {
        const code = await fetchSigleCode(slug, section)
        dispatch(storeCodes({code, designPage}))
    }

    return (
        <div>
            <aside className={`fixed top-0 left-0 ${open ? "w-1/5 bg-testBg" : "w-0 bg-transparent"} duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100 `} >
                <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                    <div className='flex items-center justify-between space-x-2'>
                        <div className="flex items-center justify-between space-x-2">
                            <button
                                className='border:solid border border-white bg-testBg p-2 rounded-md'
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

                    <div>
                        <DesignControls open={open} />
                    </div>

                </div>


                {open && <section id="choose-deign" className="h-3/4 overflow-auto rounded-md">
                    {isProtected && <p>Fetching codes</p>}
                    {(error && isFilterActive === false) && <p className="text-white">server error please wait we are fixing it.</p>}

                    {(codes && isFilterActive === false) && codes.map((code, i) => (
                        <div key={code.name.replaceAll(" ", "-")} className="bg-white p-2 my-4 rounded" >
                            <div>
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
                                        value={code.slug}
                                        onClick={(el) => renderCodes(el.target.value, section)}
                                    >
                                        Use
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {(codes && isFilterActive === false) && <div>
                        <button
                            className="w-full rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => {
                                dispatch(setPage("more"));
                            }}
                        >
                            More
                        </button>
                    </div>}
                    {isFilterActive && <Filter />}
                </section>}

                {open &&
                    <section className="fiexed bottom-0">
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
