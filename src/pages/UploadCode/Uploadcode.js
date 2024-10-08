import React, { useEffect, useState } from "react"
// import Navigation from "../Components/navigation/Navigation"
import "../../Designs/Designs/Functions/popupEditor/NodeTextStyle/popupElement.css"
import { VscCheck, VscClose } from "react-icons/vsc";
import html from "../../Images/html.png"
import css from "../../Images/css.png"
import js from "../../Images/js.png"
import { saveCode } from "./Controller/SaveCodes";

export default function Uploadcode() {
    const [htmlCode, setHtml] = useState("html");
    const [cssCode, setCss] = useState("css");
    const [jsCode, setJs] = useState("js");
    const [name, setName] = useState(null);

    const [active, setActive] = useState("html");
    const [notificationActive, setNotificationActive] = useState(false);
    const [section, setSection] = useState({ pageSection: "Navigation", type: "section" });
    const [response, setResponse] = useState();

    useEffect(() => {
        if (!notificationActive === true) return;
        setTimeout(() => {
            setNotificationActive(false);
        }, 2500)
    }, [notificationActive]);

    return (
        <div>
            <section className="overflow-x-hidden bg-neutral-900 h-screen w-screen">
                {/* <Navigation /> */}
                <section className="flex space-x-10 w-screen">
                    <section className='w-1/5 h-screen bg-neutral-800'>
                        <div className='space-x-2 p-2'>
                            <span className='font-bold text-white'>Upload Code</span>
                        </div>
                        <hr className='border-neutral-600' />
                        <section className='py-4 m-1 outline-none'>
                            <div
                                onClick={() => setActive("html")}
                                className={`flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "html" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
                                <div>
                                    <img className='h-6 w-6 rounded' src={html} alt="" />
                                </div>
                                <div>
                                    <button className='text-white'>index.html</button>
                                </div>
                            </div>
                            <div
                                onClick={() => setActive("css")}
                                className={`flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "css" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
                                <div >
                                    <img className='h-6 w-6 rounded' src={css} alt="" />
                                </div>
                                <div>
                                    <button className='text-white'>style.css</button>
                                </div>
                            </div>
                            <div
                                onClick={() => setActive("js")}
                                className={` flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "js" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
                                <div>
                                    <img className='h-6 w-6 rounded' src={js} alt="" />
                                </div>
                                <div>
                                    <button className='text-white'>script.js</button>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section className="w-11/12">
                        <div className="pr-10">
                            <section className="my-2 flex justify-between">
                                <div className="flex text-white space-x-1 items-center">
                                    <span className="text-xl text-fontBlue">user</span>
                                    <span className="text-xl">/</span>
                                    <span>
                                        <input
                                            value={name}
                                            placeholder="hero section"
                                            onChange={(el) => setName(el.target.value)}
                                            className="bg-transparent border border-borderColor p-1 rounded w-fit h-8 outline-none focus:ring focus:ring-fontBlue focus:outline-none"
                                            type="text"
                                            name="page-name"
                                            id="page-name"
                                            required
                                        />
                                    </span>
                                    <span>{<VscCheck className="text-xl text-fontBlue duration-200" />}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-white">
                                    <div>
                                        <input type="file" name="images" id="images" multiple />
                                    </div>
                                    <div>
                                        <select
                                            id="web-section"
                                            name="web-section"
                                            autoComplete="web-section"
                                            onChange={(el) => {
                                                setSection( { sectionName: el.target.value.split("-")[0], elementType: el.target.value.split("-")[1] } )
                                            }}
                                            className="block w-fit rounded-md border-0 py-1.5 text-gray-900 outline-none font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="navigation-section" selected>Navigation Section</option>
                                            <option value="hero-section">Hero Section</option>
                                            <option value="body-section">Body Section</option>
                                            <option value="footer-section">Footer Section</option>
                                            <option value="webpage-page">Complete WebPage</option>
                                            <option value="login-page">Login Section</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button
                                            className="rounded-md bg-green-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => {
                                                const webview = document.querySelector("#images").files; // Assuming #desktop is a file input
                                                const imageLength = webview.length;

                                                if (imageLength === 0 || !name || !htmlCode || !cssCode || !jsCode) {
                                                    setResponse(imageLength === 0 ?
                                                        "FAILED: Please Upload At Least One Output Image"
                                                        : !name
                                                            ? "OOPS😅 You Forgot To Give a Name"
                                                            : `OOPS😅 You Forgot To Insert ${!htmlCode ? "HTML" : !cssCode ? "CSS" : !jsCode ? "JS" : ""} Code`
                                                    );
                                                    setNotificationActive(true)
                                                } else if (!name) {
                                                    setResponse("OOPS😅 You Forgot To Give a Name");
                                                    setNotificationActive(true)
                                                } else {
                                                    const formData = new FormData();

                                                    for (let i = 0; i < imageLength; i++) {
                                                        formData.append(`webview`, webview[i]);
                                                    }
                                                    saveCode(formData, name, section, htmlCode, cssCode, jsCode)
                                                }
                                            }}
                                        >
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <div>
                                        <textarea
                                            className={`border-2 outline-none p-2 w-full rounded resize-none border-neutral-800 text-white w-inherit ${active === "html" ? "block" : "hidden"} bg-inherit`}
                                            name=""
                                            id="textarea"
                                            rows="30"
                                            onChange={(event) => setHtml(event.target.value)}
                                            value={htmlCode}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <textarea
                                            className={`border-2 outline-none p-2 w-full rounded resize-none border-neutral-800 text-white w-inherit ${active === "css" ? "block" : "hidden"} bg-inherit`}
                                            name=""
                                            id="textarea"
                                            rows="30"
                                            onChange={(event) => setCss(event.target.value)}
                                            value={cssCode}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <textarea
                                            className={`border-2 outline-none p-2 w-full rounded resize-none border-neutral-800 text-white w-inherit ${active === "js" ? "block" : "hidden"} bg-inherit`}
                                            name=""
                                            id="textarea"
                                            rows="30"
                                            onChange={(event) => setJs(event.target.value)}
                                            value={jsCode}
                                        ></textarea>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </section>
                </section>
            </section>

            {notificationActive &&
                <div className="absolute top-2 right-2 text-white  flex items-center justify-center ">
                    <div className="bg-green-900 flex items-center justify-center space-x-10 p-4 rounded">
                        <div id="popupMessage"><span id="popupMessage" > {response}</span></div>
                        <div><button onClick={() => setNotificationActive(false)}><VscClose /></button></div>
                    </div>
                </div>
            }
        </div>
    )
}
