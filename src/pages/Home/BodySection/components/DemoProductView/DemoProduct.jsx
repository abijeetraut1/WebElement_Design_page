import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBagCheck } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";

export default function DemoProduct() {
    const [orderQnt, setOrderQnt] = useState(0);

    return (
        <body className='bg-white' >
            <section className="py-11 font-poppins">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full mb-8 md:w-1/2 md:mb-0">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                        className="object-cover w-full lg:h-full " />
                                </div>
                                <div className="flex-wrap hidden md:flex ">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <Link href="#" className="block border border-blue-300 hover:border-blue-300">
                                            <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </Link>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <Link href="#" className="block border border-transparent hover:border-blue-300">
                                            <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </Link>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <Link href="#" className="block border border-transparent hover:border-blue-300">
                                            <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </Link>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <Link href="#" className="block border border-transparent hover:border-blue-300">
                                            <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <h2 className="max-w-xl mb-6 text-2xl font-bold   md:text-4xl">
                                        Macbook Pro M130c90</h2>
                                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 space-x-2">
                                        <span>$1500.99</span>
                                        <span
                                            className="text-base font-normal text-gray-500 line-through"
                                        >$1800.99</span>
                                    </p>
                                    <p className="max-w-md text-gray-700 text-justify ">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nam assumenda! Aspernatur soluta asperiores, sunt labore nihil unde voluptatem neque quasi sed ipsam. Incidunt expedita minima beatae tenetur deleniti perferendis eaque repellat, nulla iusto cumque.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h2
                                        className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300   dark:border-gray-600">
                                        Colors</h2>
                                    <div className="flex flex-wrap -mx-2 -mb-2">
                                        <button className="p-1 mb-2 mr-3 ">
                                            <div className="w-6 h-6 rounded-full bg-stone-400"></div>
                                        </button>
                                        <button className="p-1 mb-2 mr-3 ">
                                            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                                        </button>
                                        <button className="p-1 mb-2 ">
                                            <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-8 ">
                                    <h2
                                        className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-blue-300 dark:border-gray-600  ">
                                        RAM</h2>
                                    <div>
                                        <div className="flex flex-wrap -mb-2">
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300  ">
                                                8 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300  ">
                                                16 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300  ">
                                                1 TB
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <h2
                                        className="w-16 pb-1 mb-6 text-xl font-semibold border-b border-blue-300 dark:border-gray-600  ">
                                        Storage</h2>
                                    <div>
                                        <div className="flex flex-wrap -mx-2 -mb-2">
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300  ">
                                                256 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300  ">
                                                112 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 mr-2 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300  ">
                                                1 TB
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="w-32 mb-8 ">
                                        <label for=""
                                            className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600">Quantity</label>
                                        <div className="relative flex flex-row h-10 mt-6 bg-transparent rounded-xl">
                                            <div>
                                                <button
                                                    className="w-12 h-full text-gray-600 bg-gray-300 outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                                                    onClick={() => orderQnt < 0 || orderQnt > 0 ? setOrderQnt(orderQnt - 1) : ""}
                                                >
                                                    <span className="m-auto text-2xl font-thin">-</span>
                                                </button>
                                            </div>
                                            <div>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    max="10"
                                                    value={orderQnt}
                                                    className="w-12 text-center h-full text-gray-600 bg-gray-300 outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                                                    placeholder="1"
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => orderQnt < 10 ? setOrderQnt(orderQnt + 1) : ""}
                                                    className="w-12 h-full text-gray-600 bg-gray-300 outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400">
                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <button
                                            className="w-full flex items-center space-x-2 justify-center p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700">
                                            <span> <BsBagCheck /> </span>
                                            <span> Add to cart </span>
                                        </button>
                                        <button
                                            className="w-full flex items-center space-x-2 justify-center p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700">
                                            <span> <CiShoppingCart /> </span>
                                            <span> Buy Now </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}
