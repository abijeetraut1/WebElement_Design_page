import React from 'react';
import Navbar from '../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';

export default function Home() {
    return (
        <section
            style={{ backgroundImage: 'linear-gradient(to top, #10192C, #314055)' }}
        >
            <div>
                <Navbar />
            </div>

            <div>
                <Hero />
            </div>
        </section>
    )
}
