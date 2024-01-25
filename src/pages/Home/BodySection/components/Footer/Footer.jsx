import React from 'react';
import LOGO from "../../../../../Images/logo_design.svg";
import LOGOTEXT from "../../../../../Images/logo_text.svg";
import Table from './component/Table/Table';
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const explores = [
    { title: "Community", link: "/community" },
    { title: "Blogs", link: "/blogs" },
    { title: "Hosting", link: "/hosting" },
    { title: "Career", link: "/career" }
];

const premiums = [
    { title: "WebBro", link: "/webbro" },
    { title: "WritifyAI", link: "/writifyAI" },
];

const comparasions = [
    { title: "Webelement vs Wix", link: "/vs-wix" },
    { title: "Webelement vs Wordpress", link: "/vs-wordpress" },
    { title: "Webelement vs Webflows", link: "/vs-webflows" },
    { title: "Webelement vs Medium", link: "/vs-medium" },
    { title: "Webelement vs Ghost", link: "/vs-Ghost" },
];

const supports = [
    { title: "Supports Docs", link: "/support" },
    { title: "Contact", link: "/contact" },
    { title: "Feature Request", link: "/request-feature" },
    { title: "Discord", link: "/discord" },
    { title: "Twitter", link: "/twitter" },
];

const company = [
    { title: "About Webelement", link: "/about" },
    { title: "Career", link: "/career" },
    { title: "Medias", link: "/medias" },
];

const blogs = [
    { title: "Webelement Offical", link: "www.blogs.webelement.com" },
    { title: "Upgrade Blogs", link: "/career" },
    { title: "Journey Blogs", link: "/journey" },
];

const regulations = [
    { title: "Privacy and Policy", link: "/privacy-and-policy" },
    { title: "Terms and Conditions", link: "/code-of-conduct" },
    { title: "Code Of Conduct", link: "/code-of-conduct" },
];

export default function Footer() {
    return (
        <section className='py-10 w-full bg-gray-900 text-white'>
            <div className='p-6 sm:px-96 sm:py-32 space-y-6'>
                <div className='space-y-2 mx-2 lg:mx-10 lg:pmx-0 flex flex-col justify-center lg:flex-row lg:justify-between flex-wrap'>
                    <Table title="company" props={company} />
                    <div className='space-y-2'>
                        <Table title="premium" props={premiums} />
                        <div> <Table title="explore" props={explores} /> </div>
                    </div>
                    <div> <Table title="comparasion" props={comparasions} /> </div>
                    <div> <Table title="support" props={supports} /> </div>
                    <div>
                        <Table title="blogs" props={blogs} />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center space-y-6'>
                    <div className='space-y-2 flex flex-col justify-center items-center'>
                        <div>
                            {"©️ webelement " + new Date().getFullYear()}
                        </div>
                        <div className='space-x-4 flex justify-center flex-wrap'>
                            {regulations.map((regulation, i) => (
                                <Link key={i} to={regulation.link} className='my-1'> {regulation.title} </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img
                                    className="h-14 w-auto"
                                    src={LOGO}
                                    alt=""
                                />
                            </div>
                            <div className='hidden lg:block'>
                                <img
                                    className="h-8 w-auto"
                                    src={LOGOTEXT}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='flex lg:hidden space-x-4 '>
                            <div>
                                <Link to="/facebook">
                                    <CiFacebook className='w-6 h-auto' />
                                </Link>
                            </div>
                            <div>
                                <Link to="/instagram">
                                    <CiInstagram className='w-6 h-auto' />
                                </Link>
                            </div>
                            <div>
                                <Link to="/twitter">
                                    <CiTwitter className='w-6 h-auto' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
