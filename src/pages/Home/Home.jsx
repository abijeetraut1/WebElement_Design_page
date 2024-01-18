import React from 'react';
import Navbar from '../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';
import Body from './BodySection/Body';
import Test from './Test/Test';

export default function Home() {
    return (
        <section
            className='bg-slate-300 overflow-x-hidden px-2'
        >
            <div>
                <Navbar />
            </div>

            <div>
                <Hero />
            </div>
            <div>
                <Test />
            </div>
            {/* <div>
                <Body/>
            </div> */}
        </section>
    )
}
