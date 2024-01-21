import React from 'react';
import Navbar from '../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';
import Body from './BodySection/Body';
import { useSelector } from 'react-redux';

export default function Home() {
    const mobileMenuOpen = useSelector(state => state.pageControls.isMobileSlideBarOpen);

    return (
        <section
            className={`bg-slate-300 ${mobileMenuOpen? "overflow-hidden h-screen" : "overflow-x-hidden"} w-full sm:px-0`}
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
