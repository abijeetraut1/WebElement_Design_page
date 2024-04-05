/**
 * Renders a component for choosing and displaying website designs.
 * Allows users to select designs, edit them, and remove them.
 * Also provides functionality for hosting identification and popup editing.
 * @returns {JSX.Element} Designs component
*/

import React, { useState } from "react";
import { VscChromeClose, VscGripper } from "react-icons/vsc";
import { useFetch } from "../../hooks/GetRequest/useFetch";
import { useDispatch, useSelector } from 'react-redux';
import { removeCode } from "../../reduxFunction/storeUsedCode/StoreCodeSlice";

// component
import PopupElement from "./Functions/popupEditor/NodeTextStyle/PopupElement";
// import { popupPositining } from "./Functions/popupEditor/Popup/PopupPositining";
import { changeAltImage } from "./Functions/popupEditor/ChangeAltImage/ChangeAltImage";
import HostingIdendity from "./HostingProcess/HostingIdentification/HostingIdendity";
import { PopupEditorTriggerer } from "./Functions/popupEditor/PopupEditorTriggerer/PopupEditorTriggerer";
import ChooseDesign from "./Functions/Slider/DesignChoosingSlider/ChooseDesign";
import Navigation from "./components/Navigation/Navigation";
import CustomizeDesignSlider from "./Functions/Slider/CustomizeDesignSlider/CustomizeDesignSlider";

import { FiEdit2 } from "react-icons/fi";
import { setEdit } from "../../reduxFunction/PageControls/pageControls";

export default function Designs() {
    const dispatch = useDispatch();
    const [clickedHTMLElement, setClickedHTMLElement] = useState();
    const { data: fonts, isProtected: fontsProtected, error: fontsExtractError } = useFetch(process.env.REACT_APP_GOOGLE_FONT_API_URL + "?key=" + process.env.REACT_APP_GOOGLE_FONT_API_KEY + "&sort=popularity", "GET", "fonts");
    const openHostingPannel = useSelector(state => state.pageControls.hostingPannelActive);
    const selectedCodes = useSelector(state => state.StoreCodeSlice.codes);
    const designPage = useSelector(state => state.pageControls.designPage)
    const isEdit = useSelector(state => state.pageControls.isEdit);

    return (
        // side design choosing section
        <section>
            <nav>
                <Navigation/>
            </nav>
            <section className={openHostingPannel === true ? "block overflow-hidden" : "hidden"}>
                {/* pannel to host a website on a specif domain */}
                <HostingIdendity />
            </section>

            <section className={openHostingPannel === false ? "block" : "hidden"}>
                <aside >
                    {/* provide design choosing pannel where user can choose the template code */}
                    <ChooseDesign />
                </aside>

                {/* provide a additional text based design section boldfonts, font size, fonts */}
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
                            {selectedCodes && selectedCodes.map((code, i) => (
                                // below codes gives code changes over the section like remove the choosen codes,
                                //  lock the pannel (won't allow editing until it is unlocked), arrange section positioning  
                                <section key={code.id} >
                                    <div className="control-buttons flex flex-row w-full  items-center justify-center absolute z-50">
                                        <div className="control-buttons py-1 px-6 bg-blue-500 flex items-center justify-center space-x-4">
                                            <div>
                                                <button className="control-buttons" >
                                                    <VscGripper id="control-buttons" className="control-buttons text-black " />
                                                </button>
                                            </div>

                                            <div
                                                onClick={(event) => {
                                                    dispatch(setEdit(isEdit === false ? true : false));
                                                    changeAltImage(i + "-" + code.id, event.target)
                                                }}
                                            >
                                                <button
                                                    className="control-buttons"
                                                >
                                                    <FiEdit2 />
                                                </button>
                                            </div>

                                            <div>
                                                <button className="control-buttons" onClick={el => {
                                                    dispatch(removeCode({ id: code.id, pageName: designPage }))
                                                }}>
                                                    <VscChromeClose className="control-buttons text-black" />
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    {/* all the choosen codes(html, css) will append/render here to allow re-editing, re-designing */}
                                    <div>
                                        <div
                                            id={code.id + "-html-structure"}
                                            dangerouslySetInnerHTML={{ __html: code.codeParams.html }}
                                            // onLoad={}
                                            onClick={(event) => {
                                                if (isEdit === false) return;
                                                PopupEditorTriggerer(event)
                                                setClickedHTMLElement(event.target);
                                            }}
                                        ></div>
                                        <style id={code.id + "-style-structure"} dangerouslySetInnerHTML={{ __html: code.codeParams.css }}></style>
                                    </div>
                                </section>
                            ))}
                        </body>
                    </html>
                </section>

                <aside>
                    <CustomizeDesignSlider />
                </aside>
            </section >
        </section >
    )
};