import React from "react"
import Navigation from "../../Designs/navigation/Navigation"
import Editor from '@monaco-editor/react';
import { VscClose } from "react-icons/vsc";

export default function Uploadcode() {
      
  return (
    <div>
      <section className="bg-neutral-900 h-screen w-screen overflow-hidden">
        <Navigation />
        <section className="mx-10">
            <section className="flex justify-end mt-4">
                <div>
                    <button
                        className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    >Save</button>
                </div>
            </section>
            <section className="flex justify-between items-center mt-4" >

                <div>
                    <div className="flex space-x-2 border border-neutral-800 w-fit pl-2 pr-6 bg-neutral-800">
                        <div>
                            <span className="text-white">index.html</span>
                        </div>
                        <div className="flex items-center">
                            <button>
                                <VscClose className="text-white"/>
                            </button>
                        </div>  
                    </div>
                    <div>
                        {/* <Editor
                            height="80vh"
                            width="30vw"
                            theme="vs-dark"
                            defaultLanguage="HTML"
                        /> */}
                        <textarea className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}></textarea>
                    </div>
                </div>

                <div>
                    <div className="flex space-x-2 border border-neutral-800 w-fit pl-2 pr-6 bg-neutral-800">
                        <div className="flex space-x-2 ">
                            <div>
                                <span className="text-white">style.css</span>
                            </div>
                            <div className="flex items-center">
                                <button><VscClose className="text-white"/></button>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* <Editor
                            height="80vh"
                            width="30vw"
                            theme="vs-dark"
                            defaultLanguage="css"
                        /> */}
                        <textarea className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}></textarea>

                    </div>
                </div>


                <div>
                    <div className="flex space-x-2 border border-neutral-800 w-fit pl-2 pr-6 bg-neutral-800">
                        <div className="flex space-x-2 ">
                            <div>
                                <span className="text-white">script.js</span>
                            </div>
                            <div className="flex items-center">
                                <button className="text-white"><VscClose className="text-white"/></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <Editor
                            height="80vh"
                            width="30vw"
                            theme="vs-dark"
                            defaultLanguage="javascript"
                        /> */}
                        <textarea className="bg-neutral-800 text-white" name="" id="" cols="80" rows="30" style={{resize: "none"}}></textarea>

                    </div>
                </div>
            </section>
        </section>
    </section>
    </div>
  )
}
