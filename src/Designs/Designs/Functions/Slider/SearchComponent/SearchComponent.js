import { useState } from "react"
import React from 'react'

export default function SearchComponent() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <input
                type="text"
                name="site-name"
                id="site-name"
                class="block w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                onInput={(el) => setSearchValue(el.target.value)}
                value={searchValue}
            />
        </div>
    )
}
