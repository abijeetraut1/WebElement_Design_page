import { useState } from "react"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { setFilterActive } from "../../../../../reduxFunction/PageControls/pageControls";
import { useDispatch, useSelector } from "react-redux";
// import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import axios from "axios";
import { clearFetchedCodes, setFetchedCodes } from "../../../../../reduxFunction/storeUsedCode/StoreCodeSlice";

export default function SearchComponent() {
    const [searchValue, setSearchValue] = useState("");
    const designSection = useSelector(state => state.pageControls.designSection);
    const dispatch = useDispatch();

    // function toggleFilter() {
    //     dispatch(setFilterActive());
    // }

    async function searchTheCodes(searchText) {
        if (!searchText) return;

        const fetchData = await axios({
            method: "GET",
            url: process.env.REACT_APP_GET_SEARCH_FIELDS + `?section=${designSection}&name=${searchText}`,
        })

        dispatch(clearFetchedCodes());
        dispatch(setFetchedCodes(fetchData.data.message.arraySelectedData));
    }

    return (
        <div>
            <section className="flex">
                <div>
                    <input
                        type="text"
                        name="site-name"
                        id="site-name"
                        className="block rounded-md font-semibold text-xl w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 sm:max-w-full"
                        onInput={(el) => setSearchValue(el.target.value)}
                        value={searchValue}
                    />

                </div>
                <div className="w-fit">
                    <button
                        className="rounded-md bg-indigo-600 p-2 text-white"
                        onClick={() => searchTheCodes(searchValue)}
                    >
                        <CiSearch />
                    </button>
                </div>

                {/*
                    <div>
                        <div>
                            <button onClick={() => toggleFilter()} className="rounded-md bg-indigo-600 p-2 text-white">
                                <HiOutlineAdjustmentsHorizontal />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => toggleFilter()} className="rounded-md bg-indigo-600 p-2 text-white">
                                <HiOutlineAdjustmentsHorizontal />
                            </button>
                        </div> 
                    </div>
                */}
            </section>
        </div>
    )
}
