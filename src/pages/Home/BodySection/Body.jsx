import React from 'react';
import ComponentsIntro from './components/componentsIntro/ComponentsIntro';
import AiIntro from './components/AiIntro/AiIntro';
import WebsiteIntro from './components/websiteIntro/WebsiteIntro';
import Trust from './components/Trust/Trust';


export default function Body() {


    return (
        <section className="bg-gray-800 pt-9 lg:mx-0 w-full md:flex md:flex-col">
            <section>
                <WebsiteIntro />

                <ComponentsIntro />

                <AiIntro />

                <Trust />
            </section>

        </section >
    )
}
