import React, { useState } from "react"
import Navigation from "../../Designs/navigation/Navigation"
import "./../../Designs/Designs/Functions/popupEditor/popupElement.css"
import html from "../../Images/html.png"
import css from "../../Images/css.png"
import js from "../../Images/js.png"

export default function Uploadcode() {
    const [htmlCode, setHtml] = useState(null);
    const [cssCode, setCss] = useState(null);
    const [jsCode, setJs] = useState(null);
    const [active, setActive] = useState("html");


    setTimeout(() => {

        function highlightSyntax() {
            var textarea = document.querySelector("#textarea");
            var code = textarea.value;

            // Define your syntax highlighting rules using regular expressions
            var keywords = /\b(?:if|else|while|function)\b/g;
            var strings = /(['"])(?:(?!\1)[^\\]|\\.)*\1/g;

            // Apply styles to different token types
            code = code.replace(keywords, '<span class="keyword">$&</span>');
            code = code.replace(strings, '<span class="string">$&</span>');

            // Update the content of the textarea
            textarea.innerHTML = code;
        }

        // Call the function when the textarea content changes
        document.querySelector("#textarea").addEventListener("input", highlightSyntax);

        // Initial highlighting when the page loads
        highlightSyntax();
    }, 5000)

    return (
        <div>
            <section className="overflow-x-hidden bg-neutral-900 h-screen w-screen">
                <Navigation />
                <section className="flex space-x-10 w-screen">
                    <section className='w-1/5 h-screen bg-neutral-800'>
                        <div className='space-x-2 p-2'>
                            <span className='font-bold text-white'>Upload Code</span>
                        </div>
                        <hr className='border-neutral-600' />
                        <section className='py-4 m-1 outline-none'>
                            <div
                                onClick={() => setActive("html")}
                                className={` flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "html" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
                                <div>
                                    <img className='h-6 w-6 rounded' src={html} alt="" />
                                </div>
                                <div>
                                    <button className='text-white'>index.html</button>
                                </div>
                            </div>
                            <div
                                onClick={() => setActive("css")}
                                className={` flex items-center space-x-3 px-3 py-1 cursor-pointer ${active === "css" ? "border border-neutral-900 bg-neutral-900 rounded" : "border-hidden hover:bg-neutral-700"} duration-300`}>
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

                    <div className="w-11/12 pr-10">
                        <section>
                            <div>
                                <textarea
                                    className={`p-2 w-full rounded outline-none resize-none bg-neutral-800 text-white w-inherit ${active === "html" ? "block" : "hidden"}`}
                                    name=""
                                    id="textarea"
                                    rows="30"
                                    onChange={(event) => setHtml(event.target.value)}
                                ></textarea>
                            </div>
                            <div>
                                <textarea
                                    className={`p-2 w-full rounded outline-none resize-none bg-neutral-800 text-white w-inherit ${active === "css" ? "block" : "hidden"}`}
                                    name=""
                                    id="textarea"
                                    rows="30"
                                    onChange={(event) => setCss(event.target.value)}
                                ></textarea>
                            </div>
                            <div>
                                <textarea
                                    className={`p-2 w-full rounded outline-none resize-none bg-neutral-800 text-white w-inherit ${active === "js" ? "block" : "hidden"}`}
                                    name=""
                                    id="textarea"
                                    rows="30"
                                    onChange={(event) => setJs(event.target.value)}
                                ></textarea>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </div>
    )
}
