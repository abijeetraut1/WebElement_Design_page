import React from 'react';
import testProfile from "./../../../Images/test-profile.jpeg";

export default function Test() {
    return (
        <div>
            <section className='lg:flex lg:space-x-2 space-y-2 lg:space-y-0'>
                <section className='w-full lg:w-1/2 lg:h-screen'>
                    <div className='w-full h-full '>
                        <img src={testProfile} className='w-full rounded-xl object-cover h-full' alt="testprofile" />
                    </div>
                </section>
                <section className='lg:w-1/2 lg:h-screen'>
                    <div className='rounded-xl text-left h-3/4 w-full bg-gray-400 p-4 space-y-10'>
                        <div>
                            <h1 className='font-black text-white text-6xl'>Why <br /> Web Element?</h1>
                        </div>
                        <div>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla similique rem deleniti pariatur, eius consectetur molestiae ex dolorem labore optio quae consequatur, nam quidem. Quaerat explicabo eaque sint, nulla atque veniam nihil ab minus repellat, consequatur est id quasi! Beatae quasi aliquid molestias repudiandae veniam eos debitis velit laudantium.</p>
                        </div>
                    </div>
                    <div className='hidden lg:flex space-x-2 mt-4'>
                        <div className='rounded-xl w-1/2 h-full bg-green-300 p-4 space-y-4'>
                            <div>
                                <h1 className='font-black text-white text-2xl'>Simple</h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit corrupti error nobis voluptatibus temporibus impedit sed, numquam illum magni!</p>
                            </div>
                        </div>
                        <div className='rounded-xl w-1/2 bg-sky-400 p-4 space-y-4'>
                            <div>
                                <h1 className='font-black text-white text-2xl'>Simple</h1>
                            </div>
                            <div>
                                <p className='text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit corrupti error nobis voluptatibus temporibus impedit sed, numquam illum magni!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
