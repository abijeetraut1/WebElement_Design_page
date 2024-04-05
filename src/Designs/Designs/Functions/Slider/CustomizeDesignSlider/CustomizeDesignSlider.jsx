import React from 'react';
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';

import { setCustomizeDesignIsOpen } from '../../../../../reduxFunction/PageControls/pageControls';


export default function CustomizeDesignSlider() {
    const customizeDesignIsOpen = useSelector(state => state.pageControls.isCustomizeDesignIsOpen);
    const dispatch = useDispatch();
    // const [open, setOpen] = useState(true);

    return (
        <aside className={`md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/5 fixed top-12 right-0 transition-width duration-300 ${customizeDesignIsOpen ? "w-full bg-custom-black" : "w-0 bg-transparent"} l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100`} >
            <div className="flex items-center justify-end space-x-2">
                {/* button for open and closing the chooseDesign panel */}
                <button
                    className='border:solid border border-white bg-custom-black p-2 rounded-md'
                    onClick={() => dispatch(setCustomizeDesignIsOpen())}
                >
                    <TbLayoutSidebarRightCollapseFilled className='text-white text-xl' />
                </button>
            </div>
        </aside>

    )
}
