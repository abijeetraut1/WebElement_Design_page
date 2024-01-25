import React from 'react';
import "./backdrop.css";

export default function ComponentsIntro() {
    return (
        <section id='glass-container' className='py-20 p-2 w-full flex flex-col justify-center'>
            <section className='mx-4'>
                <div className="text-left sm:mx-20">
                    <div className='space-y-2'>
                        <div>
                            <heading className="capitalize text-3xl flex flex-col font-semibold tracking-tight text-gray-800 sm:text-5xl">
                                Level up your website <br /> with our interactive components
                            </heading>
                        </div>

                        <div>
                            <p className='w-full md:w-1/2 text-gray-800 sm:text-left text-justify'>
                                <details>
                                    <summary className='font-medium cursor-pointer w-fit'>
                                        Elevate your website's performance with our cutting-edge interactive components.
                                    </summary>
                                    <p>
                                        Capture user attention, boost engagement, and create a dynamic online experience. From captivating animations to user-friendly forms, our solutions empower your site with innovative features, ensuring a seamless and enjoyable journey for visitors. Level up your website today!
                                    </p>
                                </details>
                            </p>
                        </div>
                    </div>
                </div>





            </section>
        </section>
    )
}
