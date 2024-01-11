import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons({ buttons }) {
    return (
        <div>
            <div className='space-x-3'>
                {buttons && buttons.map((button) => (
                    <Link
                        key={button}
                        className="inline-block flex-none border-2 rounded-lg font-medium border-black bg-black text-white"
                        to={`/${button}`}>
                        <button
                            className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                        >
                            {button === "signup" ? "Create account" : button === "login" ? "Get started" : ""}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}
