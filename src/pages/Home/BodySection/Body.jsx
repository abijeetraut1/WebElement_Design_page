import React from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { VscCombine } from "react-icons/vsc";
import { FaIoxhost } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import ComponentsIntro from './components/componentsIntro/ComponentsIntro';
import AiIntro from './components/AiIntro/AiIntro';
import testpng from "./../../../Images/test-png.png";

const whatWeOffers = [
    {
        title: "Design",
        icon: MdOutlineDesignServices,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    }, {
        title: "Develop",
        icon: FaConnectdevelop,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    }, {
        title: "Integrate",
        icon: VscCombine,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    }, {
        title: "host",
        icon: FaIoxhost,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    }, {
        title: "Analyze",
        icon: SlGraph,
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
    },
]



export default function Body() {


    return (
        <section className="bg-gray-800 pt-9 lg:mx-0 w-full md:flex md:flex-col">
            <section className='w-full lg:flex lg:flex-wrap lg:justify-center sm:pt-9'>
                <section className='flex flex-col items-center justify-center w-full sm:mx-0 sm:py-10'>
                    <div className="text-left w-full sm:w-1/2">
                        <div>
                            <h1 className="pl-4 pb-2 text-left capitalize text-4xl flex flex-col font-light tracking-tight text-white sm:text-6xl">
                                All Web Essentiels, <br /> at one place
                            </h1>
                        </div>
                    </div>

                    <div>
                        <div className='w-full lg:flex lg:justify-start lg:flex-wrap pb-6 sm:pb-0 space-y-4 sm:space-y-4  sm:gap-0 lg:gap-10 lg:space-x-0 p-4 sm:pt-9'>
                            {whatWeOffers.map((offer, i) => (
                                <div key={i} className="flex flex-col rounded-lg space-y-4 shadow-slate-300/50 bg-[#ffffff30] shadow-md bg-blend-normal backdrop-blur-md pt-6 lg:w-[48%]">
                                    <div className='px-6 space-y-4'>
                                        <div className='flex items-center space-x-2 text-slate-300'>
                                            <div>
                                                {<offer.icon className=' text-3xl' />}
                                            </div>
                                            <div>
                                                <h1 className='capitalize'>{offer.title}</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-justify text-slate-300/75'>{offer.description}</p>
                                        </div>
                                    </div>
                                    <div >
                                        <img className='object-cover rounded-md w-full' src={testpng} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <ComponentsIntro />

                <AiIntro />
            </section>

        </section >
    )
}
