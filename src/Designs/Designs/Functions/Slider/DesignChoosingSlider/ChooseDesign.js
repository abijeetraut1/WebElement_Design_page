import { FiSidebar } from "react-icons/fi";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Extraction function used to extract the code using DOM code extractor
import { Extraction } from "./../../Extraction/Extraction";
import { storeHomePageCode } from "../../../../../reduxFunction/StorePageCode/StorePageCode";
import { useFetch } from '../../../../../hooks/GetRequest/useFetch';
import { setHostingPannelActive, setPage, setIsOpen } from '../../../../../reduxFunction/PageControls/pageControls';
import testProfile from "../../../../test-image/test-profile.jpeg";
import DesignControls from "../DesignControls/DesignControl";
import Filter from "../Filter/Filter";
import { fetchSigleCode } from "../../FetchSingle/FetchSingle";
import { setFetchedCodes, storeCodes } from "../../../../../reduxFunction/storeUsedCode/StoreCodeSlice";
import ToggleSwitch from "../../../components/Switch/ToggleSwitch";


export default function ChooseDesign() {
    const designPage = useSelector(state => state.pageControls.designPage);
    const section = useSelector(state => state.pageControls.designSection);
    const page = useSelector(state => state.pageControls.isPage);
    const isFilterActive = useSelector(state => state.pageControls.isFilterActive);
    const open = useSelector(state => state.pageControls.isOpen);

    const [isSping, setIsSpin] = useState(false);

    const [url, setUrl] = useState(`${process.env.REACT_APP_CODE_API_URL}?section=${section.toLowerCase()}&page=${page}`);
    const dispatch = useDispatch();

    const { data, isProtected, error } = useFetch(`${process.env.REACT_APP_CODE_API_URL}?section=${section.toLowerCase()}&page=${page}`, "GET", "codes");
    const codes = useSelector(state => state.StoreCodeSlice.fetchedCodes);

    useEffect(() => {
        if (!data) return;
        dispatch(setFetchedCodes(data));
    }, [data, dispatch]);

    // extracting the IDs from the react-redux of the desing used section
    const home = useSelector(state => state.StoreCodeSlice.homeIDs);
    const about = useSelector(state => state.StoreCodeSlice.aboutIDs);
    const contact = useSelector(state => state.StoreCodeSlice.contactIDs);
    const authentication = useSelector(state => state.StoreCodeSlice.authenticationIDs);

    // save code function
    /*
        when the save code runs its tooks the section id from the redux(useSelector)
        extract the all the changed codes by the help of extract function
        and stores again stores into redux
    */
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

    // for loaders
    useEffect(() => {
        if (isSping === true) {
            setTimeout(() => {
                setIsSpin(false);
            }, 3000)
        }
    }, [isSping]);

    // changing the url deisgn to for another page / section
    useEffect(() => {
        setUrl(`${process.env.REACT_APP_CODE_API_URL}?section=${section.toLowerCase()}&page=${page}`);
    }, [page, url, section]);

    // render codes runs when a user choose a design to work on it or click on USE BUTTON
    async function renderCodes(slug, section) {
        // when a user chooses a design fetchSingleCode ask backend to give codes of the choosen design 
        const code = await fetchSigleCode(slug, section)
        
        // storeCodes saves the codes into redux so that code will get rendered in DOM 
        dispatch(storeCodes({ code, designPage }))
    }

    return (
        <div>
            <aside className={`md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/5 fixed top-0 left-0 ${open ? "w-full bg-[#191919]" : "w-0 bg-transparent"} duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100`} >
                <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                    <div className='flex items-center justify-between space-x-2'>
                        <div className="flex items-center justify-between space-x-2">
                            {/* button for open and closing the chooseDesign pannel */}
                            <button
                                className='border:solid border border-white bg-[#191919] p-2 rounded-md'
                                onClick={() => dispatch(setIsOpen())}
                            >
                                <FiSidebar className='text-white text-xl ' />
                            </button>

                            {open &&
                                <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                                    Web Element
                                </div>
                            }
                        </div>
                    </div>

                    <div>
                        <div className="flex items-end justify-end space-x-1">
                            <div>
                                <ToggleSwitch open={open} />
                            </div>

                            {/* save the code button, by clicking the code will get stored in redux  */}
                            {open && <div>
                                <button
                                    className="flex items-center space-x-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => saveCodes()}
                                    title='save designed page'
                                >
                                    Save
                                </button>
                            </div>}
                        </div>

                        {/* 
                            it contains the codes which makes easy which page designs we are choosing
                            in which page we are working on
                        */}
                        <DesignControls open={open} />
                    </div>

                </div>


                {/* lopping over the codes which was choosen */}
                {open && <section id="choose-deign" className="h-3/4 overflow-auto rounded-md">
                    {isProtected && <p>Fetching codes</p>}
                    {(error && isFilterActive === false) && <p className="text-white">server error please wait we are fixing it.</p>}

                    {/* looping over the designs for user to choose and work on it */}
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

                    {/* extract more code at the initial stage it will load 30 templates by clicking it will add more 30 templates */}
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

                    {/* filter section which will give the code based on the requirement added */}
                    {isFilterActive && <Filter />}
                </section>}

                {open &&
                    <section className="fixed bottom-1 w-full">
                        <div className="flex items-center justify-between w-full px-4">
                            
                            {/* authentication user profile */}
                            <div className="flex items-center space-x-3">
                                <button title="profile">
                                    <img src={testProfile} className='outline-white h-10 w-10 rounded-full outline' alt="cannot display profile" />
                                </button>
                                <span title="username" className="text-white cursor-pointer">Abijeet Raut</span>
                            </div>

                            {/* this button activate the hosting pannel allows users to register the sites */}
                            <div>
                                <button
                                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => dispatch(setHostingPannelActive(true))}
                                    title="host designed website"
                                >
                                    Host
                                </button>
                            </div>
                        </div>
                    </section>
                }
            </aside>
        </div>
    )
}
