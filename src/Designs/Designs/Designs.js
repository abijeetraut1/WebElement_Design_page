import { useState } from "react";
import React from 'react'
import { FiSidebar } from "react-icons/fi";
import { VscFilterFilled, VscChromeClose, VscGripper, /*VscLink*/} from "react-icons/vsc";
import { useFetch } from "../../hooks/useFetch";
import testProfile from "../test-image/test-profile.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { storeCodes, removeCode, updateCode } from "../../reduxFunction/storeUsedCode/StoreCodeSlice";
import PopupElement from "./Functions/popupEditor/PopupElement";
import { popupPositining } from "./Functions/popupEditor/Popup/PopupPositining";

export default function Designs() {
    // redux
    const dispatch = useDispatch();

    const selectedCodes = useSelector(state => state.codes);
    const {data:fonts, isProtected:fontsProtected, error:fontsExtractError} = useFetch(process.env.REACT_APP_GOOGLE_FONT_API_URL+"?key="+ process.env.REACT_APP_GOOGLE_FONT_API_KEY +"&sort=popularity", "GET", "fonts");

    const [clicked, SetClicked] = useState("navigation");
    const {data:codes, isProtected, error} = useFetch(`${process.env.REACT_APP_CODE_API_URL}=${clicked.toLowerCase()}`, "GET", "codes");

    const [clickedHTMLElement, setclickedHTMLElement] = useState(null);
    const [previousClickedElement, setPreviousClickedElement] = useState(null);
    
    // for choose design pannel determine close or open
    const [open, setOpen] = useState(false);

    
    return (
        // side design choosing section
        <section>
            <aside className={`fixed top-0 left-0 ${open ? "w-1/5 bg-zinc-900" : "w-0 bg-transparent" } duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100 `} >
                <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                    <div className='flex items-center justify-between space-x-2'>
                        <div className="flex items-center justify-between space-x-2">
                            <button
                                className='border:solid border border-white bg-zinc-900 p-2 rounded-md'
                                onClick={() => setOpen(open ? false : true)}
                            >
                                {<FiSidebar className= 'text-white text-xl ' />}
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
                                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                        onClick={() => {
                                            selectedCodes.forEach(code => {
                                                try{
                                                    if(clickedHTMLElement.style.border){
                                                        clickedHTMLElement.style.border = "";
                                                    } 

                                                    if(clickedHTMLElement.style.transitionDuration){
                                                        clickedHTMLElement.style.transitionDuration = "";
                                                    }
                                                    const htmlChangedCodes = document.getElementById(`${code.id}`).innerHTML;
                                                    dispatch(updateCode({id: code.id, html: htmlChangedCodes}))

                                                } catch(err){
                                                    return;
                                                }
                                            })
                                        }}
                                    >
                                        Save
                                    </button>
                                </div>
                                <Link to="/export">
                                    <button
                                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                    >
                                        Export
                                    </button>
                                </Link>
                            </div>
                        }
                    </div>
                    {open && <div className="flex items-center justify-center space-x-1 mt-2">
                        <div>
                            <select
                                id="web-section"
                                name="web-section"
                                autoComplete="web-section"
                                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 outline-none font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                onChange={el => {SetClicked(el.target.value)}} // section choose name
                            >
                                <option value="navigation" selected>Navigation Section</option>
                                <option value="hero">Hero Section</option>
                                <option value='body'>Body Section</option>
                                <option value="footer">Footer Section</option>
                            </select>
                        </div>
                        <button className="border:solid border border-white p-2 rounded-md">
                            <VscFilterFilled className="text-white text-xl"/> 
                        </button>
                    </div>}
                    {open && <div className="my-4 block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                        {clicked} Section
                    </div>}
                </div>

                {open && <section id="choose-deign" className="h-3/4 overflow-auto rounded-md">
                    {isProtected && <p>Fetching codes</p>}
                    {error && <p className="text-white">server error please wait we are fixing it.</p>}
                    {codes && codes.map((code, i) => (
                        <div key={code.name.replaceAll(" ", "-")} className="bg-white p-2 my-4 rounded" >
                            <div className="">
                                <img src={`${process.env.REACT_APP_IMAGE_URL}/${code.desktopView}`} alt="image_cannot_be_shown"/>
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
                                            // send the object to the redux config
                                            dispatch(storeCodes({name: code.name, html: code.htmlCode, css: code.cssCode, slug: code.slug}));
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
                            <section key={code.id}>
                                <div className="control-buttons flex flex-row w-full  items-center justify-center absolute z-50">
                                    <div className="control-buttons py-1 px-6 bg-blue-500 flex items-center justify-center space-x-4">
                                        <button className="control-buttons">
                                            <VscGripper id="control-buttons" className="control-buttons text-black "/>
                                        </button>
                                        
                                        <button className="control-buttons" onClick={el => {
                                            // deleteCode(code.id)
                                            // setOpenEditPanel(false);
                                            dispatch(removeCode(code.id))
                                        }}>
                                            <VscChromeClose className="control-buttons text-black"  />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <div id={code.id}
                                        onClick={() => {
                                            const editSpace = document.getElementById("edit-space");
                                            
                                            editSpace.addEventListener('click', function(event) {
                                                const RegExp = /\n/;
                                                
                                                // const htmlChangedCodes = document.getElementById(`${code.id}`).innerHTML;
                                                // dispatch(updateCode({id: code.id, html: htmlChangedCodes}))

                                                if(previousClickedElement){
                                                    previousClickedElement.style.border = "";
                                                    previousClickedElement.style.transitionDuration = "";
                                                }

                                                // const classList = event.target.classList("control-buttons");
                                                if(event.target instanceof HTMLElement){
                                                    if(event.target.classList.contains("control-buttons")) return;
                                                }

                                                // shows the clicked element doesnot contain \n tag
                                                if(RegExp.test(event.target.textContent) === false){

                                                    event.target.setAttribute("contenteditable", "true");

                                                    event.target.style.border = "2px solid blue";
                                                    event.target.style.transitionDuration = "75ms";
                                                
                                                    popupPositining(event, true);

                                                    setclickedHTMLElement(event.target);
                                                    
                                                    // store the clicked element data to dispaly the text content in input field 
                                                    setPreviousClickedElement(event.target);
                                                }else{
                                                    // setOpenEditPanel(false);
                                                    setclickedHTMLElement(null);
                                                }

                                            });
                                        }}

                                        dangerouslySetInnerHTML={{ __html: code.codeParams.html }}
                                    ></div>
                                    <style dangerouslySetInnerHTML={ { __html: code.codeParams.css } }></style>
                                </div>
                            </section>
                        ))}
                    </body>
                </html>
            </section>
        </section>
    )
};