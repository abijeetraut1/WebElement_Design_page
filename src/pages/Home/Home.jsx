import React from 'react';
import Navbar from '../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';
import Body from './BodySection/Body';
import Test from './Test/Test';

export default function Home() {
    return (
        <section
            className='bg-slate-300 overflow-x-hidden sm:px-0'
        >
            <div>
                <Navbar />
            </div>

            <div>
                <Hero />
            </div>
            <div className='max-w-[1920px]'>
                <Body />
            </div>
        </section>
    )
}
