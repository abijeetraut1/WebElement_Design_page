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
            <section className="flex justify-end mt-4 space-x-2">
                <div>
                    <input type="file" name="" id="" 
                        title="yo file"
                        className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    />
                </div>
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
                        <textarea
                            onChange={(event) => setHtml(event.target.value)}
                            className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}
                        ></textarea>
                    </div>
                </div>

                <div>
                    <div>
                        <textarea
                            onChange={(event) => setCss(event.target.value)}
                            className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}
                        ></textarea>

                    </div>
                </div>


                <div>
                    <div>
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
