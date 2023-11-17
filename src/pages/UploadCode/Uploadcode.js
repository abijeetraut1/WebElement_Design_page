import React, { useState } from "react"
import Navigation from "../../Designs/navigation/Navigation"
// import { VscClose } from "react-icons/vsc";
import "./../../Designs/Designs/Functions/popupEditor/popupElement.css"
import { saveCode } from "./Controller/SaveCodes";


export default function Uploadcode() {
    const [html, setHtml] = useState(null);
    const [css, setCss] = useState(null);
    const [js, setJs] = useState(null);
    
  return (
    <div>
      <section className="bg-neutral-900 h-screen w-screen overflow-hidden">
        <Navigation />
        <section className="mx-10">
            <section className="flex justify-end mt-4">
                <div>
                    <button
                        onClick={() => saveCode(html, css, js)}
                        className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    >Save</button>
                </div>
            </section>
            <section className="flex justify-between items-center mt-4" >

                <div>
                    <div>
                        {/* <Editor
                            height="80vh"
                            width="30vw"
                            theme="vs-dark"
                            defaultLanguage="HTML"
                        /> */}
                        <textarea
                            onChange={(event) => setHtml(event.target.value)}
                            className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}
                        ></textarea>
                    </div>
                </div>

                <div>
                    <div>
                        {/* <Editor
                            height="80vh"
                            width="30vw"
                            theme="vs-dark"
                            defaultLanguage="css"
                        /> */}
                        <textarea
                            onChange={(event) => setCss(event.target.value)}
                            className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}
                        ></textarea>

                    </div>
                </div>


                <div>
                    <div>
                        {/* <Editor
                            height="80vh"
                            width="30vw"
                            theme="vs-dark"
                            defaultLanguage="javascript"
                        /> */}
                        <textarea
                            onChange={(event) => setJs(event.target.value)}
                            className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}
                        ></textarea>
                    </div>
                </div>
            </section>
        </section>
    </section>
    </div>
  )
}
