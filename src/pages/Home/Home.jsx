import React from 'react';
import Navbar from '../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';
import Body from './BodySection/Body';
import { useSelector } from 'react-redux';

export default function Home() {
    const mobileMenuOpen = useSelector(state => state.pageControls.isMobileSlideBarOpen);

    return (
        <section
            className={`bg-slate-300 ${mobileMenuOpen ? "overflow-hidden" : "overflow-x-hidden"} w-full`}
        >
            <div>
                <Navbar />
            </div>

            <div>
                <Hero />
            </div>
            <div>
                <Body />
            </div>
        </section>
    )
}
