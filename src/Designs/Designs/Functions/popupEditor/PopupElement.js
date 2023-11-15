import React, { useEffect, useState } from 'react'
import { VscBold, VscItalic, VscGripper  } from 'react-icons/vsc'
import { useFetch } from '../../../../hooks/useFetch';
import "./popupElement.css"
// const {data:fontsVariance, isProtected:fontsVarianceProtected, error:fontsVarianceExtractError} = useFetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDnZs3GzydgkLGgqCUYNmLFzT7qvQbG1hw&family=${choosenFont ? choosenFont : "Roboto"}`, "GET", "fonts");

export default function PopupElement() {
    const [show, setShow] = useState(false);
    const {data:fonts, isProtected:fontsProtected, error:fontsExtractError} = useFetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDnZs3GzydgkLGgqCUYNmLFzT7qvQbG1hw&sort=popularity", "GET", "fonts");
    
    const editorContainer = document.querySelector("#editor-container");
    const editSpace = document.querySelector("#edit-space");
    if(!editSpace) return; 
    editSpace.addEventListener("click", (event) => {
        const RegExp = /\n/;
        try{

            if (RegExp.test(event.target.textContent) === false) {
        
                const popupWidth = 100; // Adjust this value according to the width of your popup
                const popupHeight = 50; // Adjust this value according to the height of your popup
        
                const leftPosition = event.clientX - popupWidth / 2;
                const topPosition = event.clientY - popupHeight;
                
                editorContainer.style.left = leftPosition + "px";
                editorContainer.style.top = topPosition + "px";
                setShow(true);
            }
        }catch(err){
            if(err.name === "TypeError") return;
        }
    });

    return (
        <section id='editor-container' className={`absolute ${show ? "flex" : "hidden"} content-center space-x-1 `}>
            <div className='flex content-center cursor-move'>
                <VscGripper className='text-2xl'/>
            </div>

            <div>
                <button
                    className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                >
                    <VscBold />
                </button>
            </div>
            <div>
                <button
                    className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                >
                    <VscItalic />
                </button>
            </div>
            <div>
                <select name="" id="fonts" 
                    style={{outline:"none"}}
                    className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
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
            <div>
                <select name="" id="" 
                    style={{outline:"none"}}
                    className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                >
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
        </section>
    )
}
