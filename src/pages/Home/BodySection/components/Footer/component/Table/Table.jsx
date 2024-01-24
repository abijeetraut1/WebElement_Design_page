import React from 'react';
import { Link } from 'react-router-dom';



export default function Table({ title, props }) {

    return (
        <section>
            <section className='none lg:block'>
                <table className='flex flex-col text-left mb-2'>
                    <th className='py-1 capitalize'>{title}</th>
                    {props.map((prop, i) => (
                        <Link key={i} className='rounded font-normal w-fit lg:w-[130%] hover:bg-slate-800 text-slate-300/90' to={prop.link}><tr >{prop.title}</tr></Link>
                    ))}
                </table>

            </section>
        </section>
    )
}