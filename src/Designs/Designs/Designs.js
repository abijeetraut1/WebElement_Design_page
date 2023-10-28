import { useState,useEffect  } from "react";
import React from 'react'
import { FiSidebar } from "react-icons/fi";
import { VscFilterFilled, VscChromeClose, VscGripper, /*VscLink*/} from "react-icons/vsc";
import { useFetch } from "../../hooks/useFetch";
import testProfile from "../test-image/test-profile.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { storeCodes, removeCode } from "../../reduxFunction/storeUsedCode/StoreCodeSlice";



//  AIzaSyDnZs3GzydgkLGgqCUYNmLFzT7qvQbG1hw api key
export default function Designs() {
    // redux
    const dispatch = useDispatch();
    const selectedCodes = useSelector(state => state.codes);
    // selectedCodes.forEach(el => {
    //     console.log(el.id);
    // });

    const [clicked, SetClicked] = useState("navigation");
    const {data:codes, isProtected, error} = useFetch(`http://localhost:8000/api/v1/codes/extractCode?section=${clicked.toLowerCase()}`, "GET", "codes");
    const [choosenFont, setChoosenFont] = useState("Roboto");


    // for fonts
    const {data:fonts, isProtected:fontsProtected, error:fontsExtractError} = useFetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDnZs3GzydgkLGgqCUYNmLFzT7qvQbG1hw&sort=popularity", "GET", "fonts");
    const {data:fontsVariance, isProtected:fontsVarianceProtected, error:fontsVarianceExtractError} = useFetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDnZs3GzydgkLGgqCUYNmLFzT7qvQbG1hw&family=${choosenFont ? choosenFont : "Roboto"}`, "GET", "fonts");
   
    const [clickedHTMLElement, setclickedHTMLElement] = useState(null);
    const [previousClickedElement, setPreviousClickedElement] = useState(null);
    // for choose design pannel determine close or open
    const [open, setOpen] = useState(true);
    // for edit pannel to determine close or open
    const [openEditPanel, setOpenEditPanel] = useState(false);


    // counts the clicked word length
    const [clickWordCount, setClickWordCount] = useState(0);

    
    return (
        // side design choosing section
        <section>
            <aside className={`fixed top-0 left-0 ${open ? "w-1/5 bg-zinc-900" : "w-0 bg-transparent" } duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100 `} >
                <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                    <div className='flex items-center justify-between space-x-2'>
                        <div className="flex items-center justify-between space-x-2">
                            <button
                                className='border:solid border border-white bg-zinc-900 p-2 rounded-md'
                                // onClick={() => {
                                //     setChooseDesign(true);
                                // }}
                                onClick={() => setOpen(open ? false : true)}
                            >
                                {<FiSidebar className= 'text-white text-xl ' />}
                            </button>

                            {open && 
                                <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                                    Test  Website
                                </div>
                            } 
                        </div>

                        {open && 
                            <div>
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
                                <img src={`http://localhost:8000/desktop/${code.desktopView}`} alt="image_cannot_be_shown"/>
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
                                            // StoreCodeToState(code.name, code.htmlCode, code.cssCode, code.slug)
                                            const obj = {
                                                name: code.name, html: code.htmlCode, css: code.cssCode, slug: code.slug
                                            }
                                            // send the object to the redux config
                                            dispatch(storeCodes({name: code.name, html: code.htmlCode, css: code.cssCode, slug: code.slug}));
                                        }} // to add for deleting purpose  
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

            <section id="extract-code" className="h-screen" >
                <html lang="en">    
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link href={`https://fonts.googleapis.com/css2?family=${choosenFont}`} rel="stylesheet" />
                    </head>
                    <body id="edit-space">
                        {selectedCodes && selectedCodes.map((code, id) => (
                            <section key={code.id} id={code.id}>
                                <div className="control-buttons flex flex-row w-full  items-center justify-center absolute z-50">
                                    <div className="control-buttons py-1 px-6 bg-blue-500 flex items-center justify-center space-x-4">
                                        <button className="control-buttons">
                                            <VscGripper id="control-buttons" className="control-buttons text-black "/>
                                        </button>
                                        
                                        <button className="control-buttons" onClick={el => {
                                            // deleteCode(code.id)
                                            setOpenEditPanel(false);
                                            dispatch(removeCode(code.id))
                                        }}>
                                            <VscChromeClose className="control-buttons text-black"  />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        onClick={() => {
                                            const editSpace = document.getElementById("edit-space");
                                            
                                            editSpace.addEventListener('click', function(event) {
                                                const RegExp = /\n/;

                                                if(previousClickedElement){
                                                    previousClickedElement.style.border = "none"
                                                }

                                                // const classList = event.target.classList("control-buttons");
                                                if(event.target instanceof HTMLElement){
                                                    if(event.target.classList.contains("control-buttons")){
                                                        return;
                                                    }
                                                }

                                                // shows the clicked element doesnot contain \n tag
                                                if(RegExp.test(event.target.textContent) === false){
                                                    setOpenEditPanel(true);
                                                    let count = 1;

                                                    // counts the number of words in an clicked text
                                                    for (let i = 0; i < event.target.textContent.length; i++) {
                                                        if(event.target.textContent[i] === " "){
                                                            count++;
                                                            setClickWordCount(count);
                                                        }
                                                    }

                                                    event.target.style.border = "2px solid blue";
                                                    event.target.style.transitionDuration = "75ms";
                                                
                                                    // store the clicked element data to dispaly the text content in input field
                                                    setclickedHTMLElement(event.target);
                                                    setPreviousClickedElement(event.target);
                                                }else{
                                                    setOpenEditPanel(false);
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

            {openEditPanel && <aside className={`l-0 overflow-auto max-h-full h-screen  ${openEditPanel ? "w-1/6 bg-zinc-900" : " w-0 bg-transparent" } duration-300 bg-zinc-900 px-3 py-4 shadow-zinc-950 fixed top-0 right-0 z-1`}>
                <div>
                    <section className="">
                        <div>
                            <div className="py-3">
                                
                            </div>
                            <hr className="my-3" />
                            <div>
                                <div>
                                    {/* if clickedHTMLElement.textContent contains more then 15 words then open textarea */}
                                    {clickWordCount >= 15 ? 
                                        <textarea 
                                            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                                            type="text"
                                            name="search"
                                            id="text-input"
                                            rows="5"
                                            onChange={(el) => {
                                                if(clickedHTMLElement){
                                                    clickedHTMLElement.textContent = el.target.value;
                                                }
                                            }}
                                            placeholder={clickedHTMLElement.textContent}
                                        />
                                        :
                                        <input 
                                            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                                            type="text"
                                            placeholder={clickedHTMLElement ? clickedHTMLElement.textContent : ""}
                                            name="search"
                                            id="text-input"
                                            onChange={(el) => {
                                                if(clickedHTMLElement){
                                                    clickedHTMLElement.textContent = el.target.value;
                                                }
                                            }}
                                        />
                                    }
                                </div>
                                <div className="py-2">
                                    <button
                                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            <hr className="my-3" />
                            <div className="flex flex-col">
                                <div>
                                    <h3 className="text-white font-bolder">Fonts</h3>
                                </div>
                                <div>
                                    <select name="" id="" 
                                        className="rounded"
                                        onClick={(el) => {
                                            setChoosenFont(el.target.value);

                                            if(clickedHTMLElement){
                                                clickedHTMLElement.style.fontFamily = el.target.value;    
                                            }
                                        }}

                                    >
                                        {fontsProtected && <h3 className="text-white" >Please Wait Slow Internet.</h3>}
                                        {fontsExtractError && <h3 className="text-white" >Server Down Please Wait😥 Devs are working on it.</h3>}
                                        {fonts && fonts.data.items.map((font, i) => (
                                            <>
                                                <option value={font.family}  style={{fontFamily : font.family}}>{font.family}</option>
                                            </>
                                        ))}
                                    </select>
                                </div>
                                <div className="py-3 flex space-x-5" >
                                    <div>
                                        <div>
                                            <span className="text-white">font Size</span>
                                        </div>
                                        <div>
                                            <select name="" id="" className="rounded" onClick={(el) => {
                                                if(clickedHTMLElement){
                                                    clickedHTMLElement.style.fontSize = el.target.value;
                                                }
                                            }}>
                                                <option value="10px">10 px</option>
                                                <option value="11px">11 px</option>
                                                <option value="12px">12 px</option>
                                                <option value="13px">13 px</option>
                                                <option value="14px">14 px</option>
                                                <option value="15px">15 px</option>
                                                <option value="16px">16 px</option>
                                                <option value="20px">20 px</option>
                                                <option value="24px">24 px</option>
                                                <option value="32px">32 px</option>
                                                <option value="40px">40 px</option>
                                                <option value="48px">48 px</option>
                                                <option value="52px">52 px</option>
                                                <option value="64px">64 px</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div>
                                        <div>
                                            {/* add font style and font width */}
                                            <div>
                                                <span className="text-white">font Weight</span>
                                            </div>
                                            <div>
                                                <select name="" id="" className="rounded" onClick={(el) => {
                                                    if(clickedHTMLElement){

                                                        // change the text to italic
                                                        const italicRegExp =  /\b(\d+)italic\b/g;
                                                        if(el.target.value.match(italicRegExp)){
                                                            clickedHTMLElement.style.fontStyle = "italic";
                                                            clickedHTMLElement.style.fontWeight = el.target.value.split("00")[0] * 100;
                                                        }else{
                                                            clickedHTMLElement.style.fontStyle = "normal";
                                                            clickedHTMLElement.style.fontWeight = el.target.value;
                                                        }
                                                    }
                                                }}>
                                                    {fontsVarianceProtected && <h3 className="text-white" >Please Wait Slow Internet</h3>}
                                                    {fontsVarianceExtractError && <h3 className="text-white" >Server Down Please Wait😥 Devs are working on it.</h3>}
                                                    {fontsVariance && fontsVariance.data.items[0].variants.map((el) => (
                                                        <option key={el} value={el}>{el}</option>
                                                            
                                                    ))} 
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3" />
                            <div>
                                <div className="py-2">
                                    <h3 className="font-bold">upload Image</h3>
                                </div>
                                <div className="py-2">
                                    <input type="file" name="" id=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </aside>}
        </section>
    )
};