import React from 'react';
import { Link } from 'react-router-dom';

const auth = [
    { name: 'Login', href: '/login' },
    { name: 'Signup', href: '/signup' },
]

export default function Buttons({ buttons }) {
    return (
        <div className='w-full pl-2'>
            <div className='sm:space-x-3 flex flex-col sm:flex-row'>
                {auth.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 w-full sm:w-fit block rounded-lg sm:px-3 py-2 text-base font-semibold leading-7 text-white"
                    >
                        <button
                            className="w-full sm:w-24 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}
