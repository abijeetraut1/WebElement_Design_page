import React from 'react';
import "./style/style.css";

const firstHeading = "Design Once, Code Never";
const secondHeading = "Empowering Designers";
const thirdHeading = "with AI";

export default function AiIntro() {
    return (
        <section className='bg-black p-2 w-full flex flex-col justify-center'>
            <section className='mx-4 space-y-5 my-20 sm:mx-20'>
                <div className="space-y-2">
                    <div>
                        <heading className="capitalize text-3xl flex flex-col justify-start font-semibold tracking-tight text-white sm:text-5xl">
                            <h1>{firstHeading}</h1>
                            <h1>{secondHeading}</h1>
                            <h1>{thirdHeading}</h1>
                        </heading>
                    </div>

                    <div>
                        <p className='w-full md:w-1/2 text-white/90 sm:text-left text-justify'>
                            <details>
                                <summary className='font-medium cursor-pointer w-fit'>
                                    Revolutionize your web development process.
                                </summary>
                                <p className='text-slate-400'>
                                    Empower designers by seamlessly translating their visions into reality using cutting-edge AI technology. Elevate your website design experience and effortlessly bring creative concepts to life. Streamline workflows and enhance collaboration, making website creation a breeze for designers and developers alike.
                                </p>
                            </details>
                        </p>
                    </div>
                </div>
            </section>
        </section >
    )
}