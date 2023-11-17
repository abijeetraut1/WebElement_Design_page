import React, { useState } from 'react'
import { VscBold, VscItalic, VscGripper  } from 'react-icons/vsc'
import { useFetch } from '../../../../hooks/useFetch';
import "./popupElement.css"
import { PopupButtons } from './popUpController/PopUpButtons';
import { useDispatch } from 'react-redux';
import { storeFonts } from '../../../../reduxFunction/storeUsedCode/StoreCodeSlice';


export default function PopupElement(clickedHTMLElement) {
    const {data:fonts, isProtected:fontsProtected, error:fontsExtractError} = useFetch("https://www.googleapis.com/webfonts/v1/webfonts?key="+ process.env.REACT_APP_GOOGLE_FONT_API_KEY + "&sort=popularity", "GET", "fonts");
    const [choosenFont, setChoosenFont] = useState("Roboto");
    const {data:fontsVariance, isProtected:fontsVarianceProtected, error:fontsVarianceExtractError} = useFetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_FONT_API_KEY}&family=${choosenFont ? choosenFont : "Roboto"}`, "GET", "fonts");

    const dispatch = useDispatch();

    return (
        <section>
            <section id='editor-container' className={`absolute hidden content-center space-x-1 `}>
                <div className='flex content-center cursor-move'>
                    <button>
                        <VscGripper className='text-2xl' />
                    </button>
                </div>

                <div className='px-3'>
                    <input className='scale-150' type="color" name="fontColorChange" id="fontColorChange" 
                        onChange={(event) => PopupButtons(clickedHTMLElement, event, "fontColor")}
                    />
                </div>

                <div>
                    <button
                        className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                        onClick={(event) => PopupButtons(clickedHTMLElement,event, "bold")}
                    >
                        <VscBold />
                    </button>
                </div>
                <div>
                    <button
                        onClick={(event) => PopupButtons(clickedHTMLElement, event, "italic")}
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
                            clickedHTMLElement.clicked.style.fontFamily = event.target.value;
                            setChoosenFont(event.target.value);
                        }}
                        className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    >
                        {fontsProtected && <h3 className="text-white" >Please Wait Slow Internet.</h3>}
                        {fontsExtractError && <h3 className="text-white" >Server Down Please Wait😥 Devs are working on it.</h3>}
                        {fonts && fonts.data.items.map((font, i) => (
                            <>
                                {i <= 50 ? <option value={font.family}  style={{fontFamily : font.family}}>{font.family}</option> : ""}
                            </>
                        ))}
                    </select>
                </div>
                <div>
                    <select name="" id="fonts" 
                        style={{outline:"none"}}
                        onChange={(event) => PopupButtons(clickedHTMLElement, event, "fontWeight")}
                        className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    >
                        {fontsVarianceProtected && <h3 className="text-white" >Please Wait Slow Internet.</h3>}
                        {fontsVarianceExtractError && <h3 className="text-white" >Server Down Please Wait😥 Devs are working on it.</h3>}
                        {fontsVariance && fontsVariance.data.items[0].variants.map((variance, i) => (
                          <>
                            <option value={variance} >{variance}</option>
                          </>
                        ))}
                    </select>
                </div>
                <div>
                    <select name="" id="" 
                        style={{outline:"none"}}
                        className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                        onChange={(event) => PopupButtons(clickedHTMLElement, event, "fontSize")}
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
                        <option value="72px">72 px</option>
                        <option value="84px">84 px</option>
                        <option value="96px">96 px</option>
                        <option value="108px">108 px</option>
                    </select>
                </div>


            </section>
        </section>

    )
}
