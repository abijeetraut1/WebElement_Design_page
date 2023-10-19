import React, {useState} from 'react'
import { VscChromeClose, VscBold, VscItalic } from 'react-icons/vsc';


export default function EditPopUpPanel() { 
    const [displayEditWindow, setDisplayWindow] = useState(true);

    
    return (
        <section >
            {displayEditWindow && 
                <aside className='fixed top-0 left-1 z-2 w-1/5' >
                    <div className='w-1/4 bg-slate-600 text-white border rounded-xl p-5'>
                        <div className='flex justify-between items-center my-2'>
                            <div>
                                <p className='font-bold'>Edit Window</p>
                            </div>
                            <button onClick={() => setDisplayWindow(false)}>
                                <VscChromeClose className='text-white font-bolder'/>
                            </button>
                        </div>
                        <div>
                            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black" placeholder="Repalce AnyThing.." type="text" name="search"/>
                        </div>
                    </div>
                </aside>
            }
        </section>
    )
}
