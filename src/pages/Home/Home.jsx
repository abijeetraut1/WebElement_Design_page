import React from 'react';
import Navbar from '../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';
import Pricing from './Pricing/Pricing';

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
                
            </div>
        </section>
    )
}
