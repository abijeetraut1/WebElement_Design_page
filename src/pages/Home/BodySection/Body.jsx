import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from "./../../../Images/dashboard.webp";

const whatWeOffers = [
    {
        title: "Design",
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
        backgruond: "bg-indigo-500",
        width: "w-full"
    }, {
        title: "infrastructure",
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
        backgruond: "bg-blue-400",
        width: "w-1/2"
    }, {
        title: "host",
        description: "Crafting a website equipped with a comprehensive array of advanced functionalities allows you to breathe life into your unique vision",
        backgruond: "bg-sky-600",
        width: "w-full"
    }
]


export default function Body() {
    return (
        <section className="mx-auto max-w-full py-32 sm:py-48 lg:py-56 md:flex md:flex-col">
            <section>
                <section className='flex '>
                    <div className="text-left mx-20 w-1/2">
                        <div>
                            <h1 className="capitalize text-4xl flex flex-col font-light tracking-tight text-gray-900 sm:text-6xl">
                                All Web Essentiels, <br /> at one place
                            </h1>
                        </div>

                        <div className="flex items-center justify-left gap-x-14 flex-wrap w-full" >
                            {whatWeOffers.map((whatWeOffer) => (
                                <div key={whatWeOffer.title} className={`mt-6 py-16 px-12 ${whatWeOffer.backgruond} w-full rounded-3xl`}>
                                    <div className='mt-5'>
                                        <h1 className='font-serif tracking-wide text-xl capitalize text-white backdrop-blur-3xl'>{whatWeOffer.title}</h1>
                                    </div>
                                    <div className='mt-5'>
                                        <p>{whatWeOffer.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-end'>
                        <img src={dashboard} alt="" />
                    </div>
                </section>

                <section className='bg-black mt-10 w-full h-screen flex items-center'>
                    <div className="text-left mx-20 pt-32 pb-32 w-1/2">
                        <div className='pb-14'>
                            <heading className="capitalize text-4xl flex flex-col font-light tracking-tight text-slate-300 sm:text-5xl">
                                Level up your website with interactive <br /> components
                            </heading>
                        </div>
                        <div className='text-white text-justify'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed error placeat veritatis. Ratione vel modi sit doloremque corporis ipsa obcaecati quis assumenda voluptas molestias sequi veritatis totam nisi facilis rem delectus libero hic in fuga debitis laborum, similique reprehenderit porro eaque. Minima laborum illum fuga ut eos nam, in eveniet vitae voluptatum laboriosam iusto, minus distinctio adipisci magni vero soluta voluptate rerum debitis! Nihil quasi, ad amet unde velit, enim dolor debitis sed cumque nostrum, tenetur cum perferendis quibusdam voluptatibus doloremque nobis ea! Aliquid esse odio debitis non dolores rem accusamus ut, id repellat, quas corporis suscipit voluptatem porro.</p>
                        </div>
                    </div>
                    <div className="w-1/2">

                    </div>
                </section>
            </section>

        </section>
    )
}
