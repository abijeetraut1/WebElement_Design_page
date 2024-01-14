import React from 'react';
import Navbar from '../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';
import Body from './BodySection/Body';

export default function Home() {
    return (
        <section
            className='bg-slate-300'
        >
            <div>
                <Navbar />
            </div>

            <div>
                <Hero />
            </div>

            <div>
                <Body/>
            </div>
        </section>
    )
}
