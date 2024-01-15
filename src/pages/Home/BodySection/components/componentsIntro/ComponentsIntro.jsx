import React from 'react';
import product_view from "./../../../../../Images/product_view.png";
import "./backdrop.css";

export default function ComponentsIntro() {
    return (
        <section id='glass-container' className='mt-10 w-full flex flex-col justify-center'>
            <div className="text-left mx-20 pt-32">
                <div className='pb-4 '>
                    <heading className="capitalize text-4xl flex flex-col font-light tracking-tight text-gray-800 sm:text-5xl">
                        Level up your website with interactive <br /> <b className='font-semibold'>components</b>
                    </heading>
                </div>
            </div>

            <div className="mx-20 pb-20 h-fit">
                <img src={product_view} className="rounded-3xl" alt="product-view" />
            </div>
        </section>
    )
}
