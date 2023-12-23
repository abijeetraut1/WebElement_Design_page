import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import "./FilterStyles/disableArrows.css"
export default function Filter() {

    // for ratings buttons
    const starButtons = Array.from({ length: 5 }, (_, index) => (
        <button value={index + 1} key={index} className='rounded-md w-fit bg-indigo-600 py-2 px-3 text-white flex items-center'>
            {index + 1} <IoStarSharp />
        </button>
    ));

    return (
        <div>
            <section className='text-white'>
                <div className="flex items-start flex-col">
                    <div>
                        <h1>Ratings:</h1>
                    </div>
                    <div className="flex items-center w-4/5 justify-between">
                        {starButtons}
                    </div>
                </div>
                <div className='my-2'>
                    <div>
                        Design Used By:
                    </div>
                    <div>
                        <input
                            type="number"
                            name="site-name"
                            id="site-name"
                            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        Visibility
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <input id="filter-mobile-color-2" name="color[]" value="public" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1">your codes</label>
                        </div>
                        <div>
                            <input id="filter-mobile-color-2" name="color[]" value="ai" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1">AI Generated Codes</label>
                        </div>
                        <div>
                            <input id="filter-mobile-color-2" name="color[]" value="private" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1">Private Codes</label>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="rounded-md w-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Apply
                    </button>
                </div>
            </section>
        </div>
    )
}
