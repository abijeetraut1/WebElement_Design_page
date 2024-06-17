import React from 'react';
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from "../../color_picker/ColorPicker";

import { setCustomizeDesignIsOpen } from '../../../../../reduxFunction/PageControls/pageControls';
import { CiMobile3 } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";
import { IoMdTabletLandscape } from "react-icons/io";


export default function CustomizeDesignSlider() {
    const customizeDesignIsOpen = useSelector(state => state.pageControls.isCustomizeDesignIsOpen);
    const dispatch = useDispatch();
    // const [open, setOpen] = useState(true);

    return (
        <aside className={`md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/6 fixed top-12 right-0 transition-width duration-300 ${customizeDesignIsOpen ? "w-full bg-custom-black" : "w-0 bg-transparent"} l-0 h-screen pt-4 px-3 shadow-zinc-950 z-1 backdrop-opacity-100`} >
            <div className="flex items-center justify-end space-x-2 mb-2">
                {/* button for open and closing the chooseDesign panel */}
                {customizeDesignIsOpen &&
                    <div className={`space-x-2 `}>
                        <button
                            className='border:solid bg-indigo-600 hover:bg-indigo-500 p-2 rounded-md'
                        >
                            <CiMobile3 className='text-white text-xl' />
                        </button>

                        <button
                            className='border:solid bg-indigo-600 hover:bg-indigo-500 p-2 rounded-md'
                        >
                            <CiLaptop className='text-white text-xl' />
                        </button>
                        <button
                            className='border:solid bg-indigo-600 hover:bg-indigo-500 p-2 rounded-md'
                        >
                            <IoMdTabletLandscape className='text-white text-xl' />
                        </button>
                    </div>}
                <button
                    className='border:solid border border-white bg-custom-black p-2 rounded-md'
                    onClick={() => dispatch(setCustomizeDesignIsOpen())}
                >
                    <TbLayoutSidebarRightCollapseFilled className='text-white text-xl' />
                </button>
            </div>

            {/*  */}
            <div>
               <label>
                    <span className='text-custom-color'>Fill</span>
                    <ColorPicker />
               </label>


            </div>
        </aside>

    )
}
