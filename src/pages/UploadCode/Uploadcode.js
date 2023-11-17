import React, { useState } from "react"
import Navigation from "../../Designs/navigation/Navigation"
import "./../../Designs/Designs/Functions/popupEditor/popupElement.css"
import SlideComponent from "./SlideComponent/SlideComponent";


export default function Uploadcode() {
    const [html, setHtml] = useState(null);
    const [css, setCss] = useState(null);
    const [js, setJs] = useState(null);
    
  return (
    <div>
      <section className="bg-neutral-900 h-screen w-screen">
        <Navigation />
        <section className="flex space-x-10 w-screen">
            <SlideComponent />
            <div className="w-screen">
                <div className="py-5">
                    <button className="flex flex-col">
                        <input type="file" name="" id="upload_file" className="text-transparent"/>
                    </button>
                </div>
                <div>
                    <textarea
                        onChange={(event) => setHtml(event.target.value)}
                        className="resize-none bg-neutral-800 text-white w-11/12 h-screen"
                        name="" id=""
                    ></textarea>
                </div>
            </div>
        </section>
    </section>
    </div>
  )
}
