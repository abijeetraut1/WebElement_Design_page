import React, { useEffect } from 'react'
import { VscBold, VscItalic, VscGripper  } from 'react-icons/vsc'
import { useFetch } from '../../../../hooks/useFetch';
import "./popupElement.css"
import { PopupButtons } from './popUpController/PopUpButtons';
import { useSelector, useDispatch } from 'react-redux';
import { storeFonts } from '../../../../reduxFunction/storeUsedCode/StoreCodeSlice';


export default function PopupElement(clickedHTMLElement) {
    const {data:fonts, isProtected:fontsProtected, error:fontsExtractError} = useFetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDnZs3GzydgkLGgqCUYNmLFzT7qvQbG1hw&sort=popularity", "GET", "fonts");
    const dispatch = useDispatch();

    return (
        <section id='editor-container' className={`absolute hidden content-center space-x-1 `}>
            <div className='flex content-center cursor-move'>
                <button>
                    <VscGripper className='text-2xl' />
                </button>
            </div>

            <div>
                <button
                    className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    onClick={() => PopupButtons(clickedHTMLElement, "bold")}
                >
                    <VscBold />
                </button>
            </div>
            <div>
                <button
                    onClick={() => PopupButtons(clickedHTMLElement, "italic")}
                    className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                >
                    <VscItalic />
                </button>
            </div>
            <div>
                <select name="" id="fonts" 
                    style={{outline:"none"}}
                    onChange={(event) => {
                        dispatch(storeFonts(event.target.value))
                    }}
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
