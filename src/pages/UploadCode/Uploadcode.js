import React from "react"
import Navigation from "../../Designs/navigation/Navigation"
import Editor from '@monaco-editor/react';
import { VscClose } from "react-icons/vsc";

export default function Uploadcode() {
      
  return (
    <div>
      <section className="bg-neutral-900 h-screen w-screen overflow-hidden">
        <Navigation />
        <section className="flex justify-around items-center mt-4" >
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
                    <Editor
                        height="80vh"
                        width="30vw"
                        theme="vs-dark"
                        defaultLanguage="HTML"
                    />
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
                    <Editor
                        height="80vh"
                        width="30vw"
                        theme="vs-dark"
                        defaultLanguage="css"
                    />
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
                    <Editor
                        height="80vh"
                        width="30vw"
                        theme="vs-dark"
                        defaultLanguage="javascript"
                    />
                </div>
            </div>
        </section>
      </section>
    </div>
  )
}
