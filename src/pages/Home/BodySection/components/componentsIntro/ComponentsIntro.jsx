import React from 'react';
import "./backdrop.css";
import DemoProduct from '../DemoProductView/DemoProduct';

export default function ComponentsIntro() {
    return (
        <section id='glass-container' className='mt-10 w-full flex flex-col justify-center'>
            <section className='mx-4 pb-20'>
                <div className="text-left sm:mx-20 pt-32">
                    <div className='pb-4 '>
                        <heading className="capitalize text-3xl flex flex-col font-light tracking-tight text-gray-800 sm:text-5xl">
                            Level up your website with interactive <br /> components
                        </heading>
                    </div>
                </div>

                <div id='mobile-cover' className="w-full border-4 border-black block rounded-2xl sm:mx-20">
                    <div className='w-full bg-black border-black border-4 h-12 border-b-4 rounded-t-lg'></div>
                    <div className='h-screen overflow-auto w-full'>
                        <DemoProduct />
                    </div>
                    <div className='w-full bg-black border-black border-4 h-12 border-b-4 rounded-b-lg'></div>
                </div>



            </section>
        </section>
    )
}
