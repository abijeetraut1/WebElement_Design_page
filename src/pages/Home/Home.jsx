import React from 'react'
import Navigation from '../Components/Navigation/Navigation'

export default function Home() {
    return (
        <section className='antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'>
            <div>
                <Navigation />
            </div>
            <div>
                home page
            </div>
        </section>
    )
}
