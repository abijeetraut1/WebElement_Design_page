import { useState } from "react";
import React from 'react'
import { FiSidebar } from "react-icons/fi";
import { VscFilterFilled, VscChromeClose, VscGripper, VscEdit} from "react-icons/vsc";
import { useFetch } from "../../hooks/useFetch";
import testProfile from "../test-image/test-profile.jpeg"

export default function Designs() {
    const [clicked, SetClicked] = useState("navigation");
    const {data:codes, isProtected, error} = useFetch("http://localhost:8000/api/v1/codes/extractCode", clicked.toLowerCase());
    
    const [storedCode, setStoreCode] = useState([]); // stroage clicked code in an array of object
    const [clickedHTMLElement, setclickedHTMLElement] = useState(null);
    const [previousClickedElement, setPreviousClickedElement] = useState(null);

    const [open, setOpen] = useState(true);
    const [openEditPanel, setOpenEditPanel] = useState(false);

    function generateUniqueCharacter() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        const uniqueChars = new Set();
      
      
        while (uniqueChars.size < 10) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          uniqueChars.add(characters[randomIndex]);
        }
      
        return Array.from(uniqueChars).join('');
    }
      

    function storeCodeToState(name, html, css, slug){
        // later we will be updgrading the code and do it with 
        setStoreCode((prevStoreCode) => [...prevStoreCode, { name, html, css, slug, deleteSlug: generateUniqueCharacter() } ]);
    }

    function deleteCode(storedCodeObj, deleteEntityName) {

        /*
            thing i need to do is
                1. track the click element id or storedCode.deleteSlug, if the content matched then re-form the array without object which match with the storedCode.deleteSlug 
        */
       storedCodeObj.forEach((ele, i) => {
            if(ele.deleteSlug === deleteEntityName){
                /* 
                    form a new array and store the newlly formed array in the same same state
                */
                storedCodeObj.splice(i, 1);
                console.log(storedCodeObj)
            }
       });
        // setStoreCode(
        //     storedCodeObj.filter((el, i) =>  el.deleteSlug !== deleteEntityName)
        // );
    }

    
    
    return (
        // side design choosing section
        <section>
            <aside className={`fixed top-0 left-0 ${open ? "w-1/5 bg-gray-900 " : "w-0 bg-transparent" } duration-300 l-0 h-screen   px-3 pt-4 shadow-zinc-950  z-1 backdrop-opacity-100`} >
                <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                    <div className='flex items-center justify-between space-x-2'>
                        <button
                            className='border:solid border border-white bg-gray-900 p-2 rounded-md'
                            // onClick={() => {
                            //     setChooseDesign(true);
                            // }}
                            onClick={() => setOpen(open ? false : true)}
                        >
                            {<FiSidebar className= 'text-white text-xl ' />}
                        </button>

                        {open && <div className="block text-xl font-medium leading-6 text-white border:solid rounded-md w-full text-left capitalize">
                            Test  Website
                        </div> } 

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
                        <div key={code.name.replaceAll(" ", "-")} className="bg-white p-2 my-4 rounded">
                            <div className="">
                                <img src={`http://localhost:8000/desktop/${code.desktopView}`} alt="Image not found"/>
                            </div>
                            <div className="bg-white py-3 ">
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <h3 className="font-bold capitalize">{code.name}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-slate-500"><a href="#">Abijeet Raut</a></h5>
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
                                            storeCodeToState(code.name, code.htmlCode, code.cssCode, code.slug)
                                            // console.log(code.slug)
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
                                <span className="text-white">Abijeet Raut</span>
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

            <section id="extract-code" className="h-screen">
                <html lang="en">    
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </head>
                    <body id="edit-space">
                        {storedCode && storedCode.map((code, i) => (
                            <section key={i} id={code.deleteSlug}>
                                <div className="control-buttons flex flex-row w-full  items-center justify-center absolute z-50">
                                    <div className="control-buttons py-1 px-6 bg-blue-500 flex items-center justify-center space-x-4">
                                        <button className="control-buttons">
                                            <VscGripper id="control-buttons" className="control-buttons text-black "/>
                                        </button>
                                        
                                        <button className="control-buttons" onClick={el => {
                                            deleteCode(storedCode, code.deleteSlug)
                                        }}>
                                            <VscChromeClose className="control-buttons text-black"  />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        onClick={() => {
                                            // for click element
                                            const editSpace = document.getElementById("edit-space");
                                            
                                            editSpace.addEventListener('click', function(event) {
                                                const RegExp = /\n/;
                                                
                                                if(previousClickedElement){
                                                    previousClickedElement.style.border = "0px"
                                                }

                                                // const classList = event.target.classList("control-buttons");
                                                if(event.target instanceof HTMLElement){
                                                    if(event.target.classList.contains("control-buttons")){
                                                        return;
                                                    }
                                                    // && event.target.classList.contains("control-buttons") === false
                                                }

                                                // shows the clicked element doesnot contain \n tag
                                                if(RegExp.test(event.target.textContent) === false){
                                                    setOpenEditPanel(true);
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
                                        dangerouslySetInnerHTML={{ __html: code.html }}
                                    ></div>
                                    <style dangerouslySetInnerHTML={ { __html: code.css } }></style>
                                </div>
                            </section>
                        ))}

                    </body>
                </html>
            </section>
            {/* AIzaSyDnZs3GzydgkLGgqCUYNmLFzT7qvQbG1hw api key */}
            {openEditPanel && <aside className={`l-0 overflow-auto max-h-full h-screen  ${openEditPanel ? "w-1/6 bg-gray-900 " : "duration-700 w-0 bg-transparent" }  bg-gray-900 px-3 py-4 shadow-zinc-950 fixed top-0 right-0 z-1`}>
                <div>
                    <section className="">
                        <div>
                            <div className="pb-2">
                                <div className="flex justify-between">
                                    <button
                                            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Export
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
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
                                </div>
                                <div className="py-2">
                                    <button
                                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </aside>}
        </section>
    )
};