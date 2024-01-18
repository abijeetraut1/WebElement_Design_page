import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from "./../../../Images/dashboard.webp";
import product_view from "./../../../Images/product_view.png";
import ComponentsIntro from './components/componentsIntro/ComponentsIntro';
import AiIntro from './components/AiIntro/AiIntro';

const whatWeOffers = [
    {
        title: "Design",
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
        backgruond: "bg-indigo-500/50"
    }, {
        title: "infrastructure",
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
        backgruond: "bg-blue-400"
    }, {
        title: "host",
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
        backgruond: "bg-sky-600",
    },
]



export default function Body() {


    return (
        <section className="mx-auto w-full py-2 sm:py-48 lg:py-56 md:flex md:flex-col">
            <section>
                <section className='flex flex-col-reverse mx-4'>
                    <div className="text-left w-full sm:w-1/2">
                        <div>
                            <h1 className="text-left capitalize text-4xl flex flex-col font-light tracking-tight text-gray-900 sm:text-6xl">
                                All Web Essentiels, <br /> at one place
                            </h1>
                        </div>
                        <section>
                            <div className="flex items-center justify-left gap-x-14 flex-wrap w-full" >
                                {whatWeOffers.map((whatWeOffer) => (
                                    <div key={whatWeOffer.title} className={`mt-6 py-16 px-12 ${whatWeOffer.backgruond} w-full rounded-3xl`}>
                                        <div className='mt-5'>
                                            <h1 className='font-serif tracking-wide text-xl capitalize text-gray-900 backdrop-blur-3xl'>{whatWeOffer.title}</h1>
                                        </div>
                                        <div className='mt-5 sm:mt-0 hidden sm:block'>
                                            <p>{whatWeOffer.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-end'>
                                <img src={dashboard} alt="" />
                            </div>
                        </section>
                    </div>
                </section>

                <ComponentsIntro />

                <AiIntro />
            </section>

        </section >
    )
}
