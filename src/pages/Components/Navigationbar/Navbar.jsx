import React, { useState } from 'react';
import LOGO from "./../../../Images/logo_design.svg";
import LOGOTEXT from "./../../../Images/logo_text.svg";
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import Buttons from '../Buttons/Buttons';

const navigation = [
    { name: 'Design', href: '#' },
    { name: 'Host', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'Blogs', href: '#' },
]


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header>
            <nav className="flex items-center justify-between lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5 flex">
                        <div>
                            <img
                                className="h-8 w-auto"
                                src={LOGO}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-8 w-auto"
                                src={LOGOTEXT}
                                alt=""
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden duration-300">
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <RiMenuFoldLine className="h-6 w-6 " aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-base font-semibold leading-6 text-white">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex space-x-2">
                        <Buttons />
                    </div>
                </div>
            </nav>

            <Dialog
                className="lg:hidden duration-300" open={mobileMenuOpen} onClose={setMobileMenuOpen}
            >
                <Dialog.Panel className="fixed inset-0 z-50" />
                <div
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                    style={{ backgroundImage: 'linear-gradient(to top, #4478e9, #161c25)' }}

                >
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5 flex">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src={LOGO}
                                    alt=""
                                />
                            </div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <img
                                        className="h-6 w-auto"
                                        src={LOGOTEXT}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {/* <span className="sr-only text-white">
                            </span> */}
                            <RiMenuUnfoldLine className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </header>
    )
}
