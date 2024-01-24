import React from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { VscCombine } from "react-icons/vsc";
import { FaIoxhost } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import testpng from "./../../../../../Images/test-png.png";

const whatWeOffers = [
    {
        title: "Design",
        icon: MdOutlineDesignServices,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero nesciunt laborum. Nesciunt adipisci facere porro dignissimos, minus nihil velit officia voluptatum in tempora maiores! Quasi exercitationem omnis voluptatem nihil qui porro rerum dolor cupiditate molestiae aliquid, voluptatibus id deleniti ducimus officia nesciunt ipsa, alias magni culpa vel facere reiciendis?",
        width: "w-full"
    }, {
        title: "Develop",
        icon: FaConnectdevelop,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad reprehenderit est quae voluptatibus maxime tempore voluptatum. Praesentium cum consequuntur eveniet pariatur dolorem blanditiis impedit!",
        width: "w-[50%]"
    }, {
        title: "Integrate",
        icon: VscCombine,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad reprehenderit est quae voluptatibus maxime tempore voluptatum. Praesentium cum consequuntur eveniet pariatur dolorem blanditiis impedit!",
        width: "w-[49.5%]"
    }, {
        title: "host",
        icon: FaIoxhost,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero nesciunt laborum. Nesciunt adipisci facere porro dignissimos, minus nihil velit officia voluptatum in tempora maiores! Quasi exercitationem omnis voluptatem nihil qui porro rerum dolor cupiditate molestiae aliquid, voluptatibus id deleniti ducimus officia nesciunt ipsa, alias magni culpa vel facere reiciendis?",
        width: "w-full"
    }, {
        title: "Analyze",
        icon: SlGraph,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero nesciunt laborum. Nesciunt adipisci facere porro dignissimos, minus nihil velit officia voluptatum in tempora maiores! Quasi exercitationem omnis voluptatem nihil qui porro rerum dolor cupiditate molestiae aliquid, voluptatibus id deleniti ducimus officia nesciunt ipsa, alias magni culpa vel facere reiciendis?",
        width: "w-[69.5%]"
    }, {
        title: "Analyze",
        icon: SlGraph,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ad?",
        width: "w-[30%]"
    }
]

export default function WebsiteIntro() {
    return (
        <section className='px-2 lg:px-52 py-16 max-w-[1920px]'>
            <section className='lg:flex lg:items-start lg:justify-start lg:flex-col w-full pb-6'>
                <div className="text-left">
                    <div>
                        <h1 className="pb-2 text-left capitalize text-4xl flex flex-col font-light tracking-tight text-white sm:text-6xl">
                            All Web Essentiels, <br /> at one place
                        </h1>
                    </div>
                </div>

                <div className='space-y-2 flex flex-wrap justify-between'>
                    {whatWeOffers.map((offer) => (
                        <div id='glass-pane' className={`${offer.width === "w-full" ? "flex-col lg:flex-row lg:w-full" : `lg:${offer.width} flex-col lg:flex-row`} flex pt-12 lg:py-12 `}>
                            <div className={`${offer.width === "w-full" ? "lg:w-2/5 " : "lg:flex-row w-full pr-10 "} space-y-4 px-6 py-2 space-x-4 items-center`}>
                                <div className={`px-2 lg:px-4 flex ${offer.width === "w-full" ? "" : "items-start"}  space-x-2 w-full`}>
                                    <div>
                                        {<offer.icon className='text-3xl text-white' />}
                                    </div>
                                    <div>
                                        <h1 className='font-semibold text-white'>{offer.title}</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-justify text-slate-300/90'>{offer.description}</p>
                                </div>
                            </div>
                            <div>
                                <img src={testpng} className='rounded-lg' alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}
