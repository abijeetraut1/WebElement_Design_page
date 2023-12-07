import React, { useState, useEffect } from "react";

// incons
import { FiSidebar } from "react-icons/fi";
import { VscChromeClose, VscGripper } from "react-icons/vsc";
import { ImSpinner3 } from "react-icons/im";

// Custom APIs
import { useFetch } from "../../hooks/GetRequest/useFetch";

// Images
import testProfile from "../test-image/test-profile.jpeg";
import ai from "../../Images/ai.png"

// redux
import { useDispatch, useSelector } from 'react-redux';
import { storeCodes, removeCode, clearPreviousCodeOnDOM } from "../../reduxFunction/storeUsedCode/StoreCodeSlice";
import { storeHomePageCode } from "../../reduxFunction/StorePageCode/StorePageCode";
import { setClose } from "../../reduxFunction/PageControls/pageControls";

// component
import PopupElement from "./Functions/popupEditor/NodeTextStyle/PopupElement";
import { popupPositining } from "./Functions/popupEditor/Popup/PopupPositining";
import { changeAltImage } from "./Functions/popupEditor/ChangeAltImage/ChangeAltImage";
import HostingIdendity from "./HostingProcess/HostingIdentification/HostingIdendity";
import { Extraction } from "./Functions/Extraction/Extraction";
import { Render } from "./Functions/Render/Render";

export default function Designs() {
    // state
    const [section, setSection] = useState("Navigation");
    const [clickedHTMLElement, setclickedHTMLElement] = useState(null);
    const [previousClickedElement, setPreviousClickedElement] = useState(null);
    const [open, setOpen] = useState(true);  // for choose design pannel determine close or open
    const [designPage, setDesignPage] = useState("home");
    const [isSping, setIsSpin] = useState(false);

    // Fetch
    const { data: fonts, isProtected: fontsProtected, error: fontsExtractError } = useFetch(process.env.REACT_APP_GOOGLE_FONT_API_URL + "?key=" + process.env.REACT_APP_GOOGLE_FONT_API_KEY + "&sort=popularity", "GET", "fonts");
    const { data: codes, isProtected, error } = useFetch(`${process.env.REACT_APP_CODE_API_URL}=${section.toLowerCase()}`, "GET", "codes");

    // redux Dispatch
    const dispatch = useDispatch();

    // extract from Redux
    const isDisplay = useSelector(state => state.pageControls.setNamePannel);
    const selectedCodes = useSelector(state => state.StoreCodeSlice.codes);

    // codes ids 
    const home = useSelector(state => state.StoreCodeSlice.homeIDs);
    const about = useSelector(state => state.StoreCodeSlice.aboutIDs);
    const contact = useSelector(state => state.StoreCodeSlice.contactIDs);

    const homePage = useSelector(state => state.StorePageCode.home);


    useEffect(() => {
        if (isSping === true) {
            setTimeout(() => {
                setIsSpin(false);
            }, 3000)
        }
    }, [isSping]);

    // save code function
    function saveCodes() {
        let extractedCodes;
        if (designPage === "home") {
            extractedCodes = Extraction(home);
        } else if (designPage === "contact") {
            extractedCodes = Extraction(contact);
        } else if (designPage === "about") {
            extractedCodes = Extraction(about);
        }

        dispatch(storeHomePageCode({ code: extractedCodes, section: designPage }));
        dispatch(clearPreviousCodeOnDOM());
    }

    return (
        // side design choosing section
        <section>
            <section className={isDisplay === true ? "block overflow-hidden" : "hidden"}>
                <HostingIdendity />
            </section>

            <section className={isDisplay === false ? "block" : "hidden"}>
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
                                                setSection(el.target.value)
                                            }} // section choose name
                                        >
                                            <option value="navigation" selected>Navigation Section</option>
                                            <option value="hero">Hero Section</option>
                                            <option value='body'>Body Section</option>
                                            <option value="footer">Footer Section</option>
                                            <option value="webpage" >Complete Website</option>
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
                                            saveCodes();
                                            setDesignPage(el.target.value);
                                        }}
                                    >
                                        <option value="home" selected>Home</option>
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
                                    onClick={() => dispatch(setClose(true))}
                                >
                                    Host
                                </button>
                            </div>
                        </div>
                    </section>}
                </aside>
                <PopupElement clicked={clickedHTMLElement} />
                <section id="extract-code" className="h-screen" >
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                            {fontsProtected && <h3 className="text-white" >Please Wait Slow Internet.</h3>}
                            {fontsExtractError && <h3 className="text-white" >Server Down Please Wait😥 Devs are working on it.</h3>}
                            {
                                fonts && fonts.data.items.map((font, i) => (
                                    <>
                                        {i <= 50 ? <link href={`${process.env.REACT_APP_GOOGLE_FONT_FAMILY_API_URL}=${font.family.replaceAll(" ", "+")}`} rel="stylesheet" /> : ""}
                                    </>
                                ))
                            }

                        </head>
                        <body id="edit-space">
                            {selectedCodes && selectedCodes.map((code, id) => (
                                <section key={code.id} >
                                    <div className="control-buttons flex flex-row w-full  items-center justify-center absolute z-50">
                                        <div className="control-buttons py-1 px-6 bg-blue-500 flex items-center justify-center space-x-4">
                                            <button className="control-buttons" >
                                                <VscGripper id="control-buttons" className="control-buttons text-black " />
                                            </button>

                                            <button className="control-buttons" onClick={el => {
                                                dispatch(removeCode({ id: code.id, pageName: designPage }))
                                            }}>
                                                <VscChromeClose className="control-buttons text-black" />
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <div id={code.id + "-html-structure"}
                                            dangerouslySetInnerHTML={{ __html: code.codeParams.html  }}
                                            onLoad={changeAltImage(code.id)}

                                            onClick={() => {
                                                const editSpace = document.getElementById("edit-space");

                                                editSpace.addEventListener('click', function (event) {
                                                    const RegExp = /\n/;

                                                    if (previousClickedElement) {
                                                        previousClickedElement.style.border = "";
                                                        previousClickedElement.style.transitionDuration = "";
                                                    }

                                                    // const classList = event.target.classList("control-buttons");
                                                    if (event.target instanceof HTMLElement) {
                                                        if (event.target.classList.contains("control-buttons")) return;
                                                    }

                                                    // shows the clicked element doesnot contain \n tag
                                                    if (RegExp.test(event.target.textContent) === false) {
                                                        if (event.target.tagName !== "IMG") {
                                                            event.target.setAttribute("contenteditable", "true");
                                                        }

                                                        event.target.style.border = "2px solid blue";
                                                        event.target.style.transitionDuration = "75ms";

                                                        if (event.target.tagName !== "IMG") {
                                                            popupPositining(event, true);
                                                        }

                                                        setclickedHTMLElement(event.target);

                                                        // store the clicked element data to dispaly the text content in input field 
                                                        setPreviousClickedElement(event.target);
                                                    } else {
                                                        // setOpenEditPanel(false);
                                                        setclickedHTMLElement(null);
                                                    }
                                                });
                                            }}
                                        ></div>
                                        <style id={code.id + "-style-structure"} dangerouslySetInnerHTML={{ __html: code.codeParams.css }}></style>
                                    </div>
                                </section>
                            ))}
                        </body>
                    </html>
                </section>
            </section >
        </section >
    )
};