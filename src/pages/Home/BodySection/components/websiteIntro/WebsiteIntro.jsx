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
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      width: "w-full"
    },
    {
      title: "Develop",
      icon: FaConnectdevelop,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      width: "lg:w-[50%]"
    },
    {
      title: "Integrate",
      icon: VscCombine,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      width: "lg:w-[49%]"
    },
    {
      title: "Host",
      icon: FaIoxhost,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      width: "w-full"
    },
    {
      title: "Analyze",
      icon: SlGraph,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      width: "lg:w-[50%]"
    },
    {
      title: "Analyze",
      icon: SlGraph,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      width: "lg:w-[49%]"
    }
  ];

export default function WebsiteIntro() {
    return (
        <section className='px-4 lg:px-20 py-8 md:py-16 max-w-[1920px]'>
            <section className='lg:flex lg:items-start lg:justify-start lg:flex-col w-full pb-6'>
                <div className="text-left">
                    <div>
                        <h1 className="pb-2 text-left capitalize text-4xl flex flex-col font-light tracking-tight text-white sm:text-6xl">
                            All Web Essentiels, <br /> at one place
                        </h1>
                    </div>
                </div>

                <div className='space-y-2 md:space-y-3 flex flex-wrap justify-between'>
                    {whatWeOffers.map((offer) => (
                        <div id='glass-pane'
                            className={`${offer.width === "w-full" ? "flex-col lg:flex-row lg:w-full" : `${offer.width} flex-col`} flex pt-6 lg:pt-12 lg:py-12 `}
                        >
                            <div className={`${offer.width === "w-full" ? "lg:w-2/5" : "flex-row w-full pr-10 "} space-y-4 px-2 lg:px-6 py-2 space-x-4 items-center`}>
                                <div className={`px-2 lg:px-4 flex ${offer.width === "w-full" ? "" : "items-start"}  space-x-2 w-full`}>
                                    <div>
                                        {<offer.icon className='text-3xl text-white' />}
                                    </div>
                                    <div>
                                        <h1 className='font-semibold text-white'>{offer.title}</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className=' text-slate-300/90'>{offer.description}</p>
                                </div>
                            </div>
                            <div className='lg:w-full'>
                                <img src={testpng} className='w-full h-auto rounded-lg' alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}
