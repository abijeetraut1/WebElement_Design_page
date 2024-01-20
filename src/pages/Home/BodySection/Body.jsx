import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDesignServices } from "react-icons/md";
import ComponentsIntro from './components/componentsIntro/ComponentsIntro';
import AiIntro from './components/AiIntro/AiIntro';

const whatWeOffers = [
    {
        title: "Design",
        icon: MdOutlineDesignServices,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    },{
        title: "Develop",
        icon: MdOutlineDesignServices,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    },{
        title: "Integrate",
        icon: MdOutlineDesignServices,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    },{
        title: "Live",
        icon: MdOutlineDesignServices,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    },{
        title: "Analyze",
        icon: MdOutlineDesignServices,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    },
]



export default function Body() {


    return (
        <section className="bg-gray-800 pt-9 pb-9 lg:mx-0 lg:mt:12 lg:mb:12 w-full py-2 md:flex md:flex-col">
            <section className=''>
                <section className=' flex flex-col sm:mx-0 sm:py-10'>
                    <div className="text-left w-full sm:w-1/2">
                        <div>
                            <h1 className="pl-4 pb-2 text-left capitalize text-4xl flex flex-col font-light tracking-tight text-white sm:text-6xl">
                                All Web Essentiels, <br /> at one place
                            </h1>
                        </div>
                    </div>

                    <div className=' w-full lg:flex lg:flex-wrap space-y-4 p-4 sm:py-9'>
                        {whatWeOffers.map((offer, i) => (
                            <div key={i} className="rounded-lg block space-y-4 shadow-slate-300/50 bg-[#ffffff30] shadow-md bg-blend-normal backdrop-blur-md p-6 lg:w-1/5 ">
                                <div className='flex items-center space-x-2 text-slate-300'>
                                    <div>
                                        { <offer.icon className=' text-3xl' />}
                                    </div>
                                    <div>
                                        <h1 className='capitalize'>{offer.title}</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-justify'>{offer.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>

                <ComponentsIntro />

                <AiIntro />
            </section>

        </section >
    )
}
