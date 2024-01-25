import React from 'react';
import "./style/style.css";

const firstHeading = "Design Once, Code Never";
const secondHeading = "Empowering Designers";
const thirdHeading = "with AI";

export default function AiIntro() {
    return (
        <section className='bg-black p-2 w-full flex flex-col justify-center'>
            <section className='mx-4 space-y-5 my-20 sm:mx-20'>
                <div className="">
                    <div>
                        <heading className="capitalize text-3xl flex flex-col justify-start font-semibold tracking-tight text-white sm:text-5xl">
                            <h1>{firstHeading}</h1>
                            <h1>{secondHeading}</h1>
                            <h1>{thirdHeading}</h1>
                        </heading>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </section >
    )
}