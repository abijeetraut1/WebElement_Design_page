import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Services = [
    {
        price: 0,
        period: "Basic",
        planType: "Premium Plan",
        planDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil facere consequuntur recusandae. Dolore in ex, porro laboriosam consectetur maxime?",
        planIncluded: ["1 Website", "Admin Pannel", "Cloud Hosted Database", "cloud image hosting"]

    }, {
        price: 9.99,
        period: "Annual",
        planType: "Premium Plan",
        planDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil facere consequuntur recusandae. Dolore in ex, porro laboriosam consectetur maxime?",
        planIncluded: ["Seprate Hosting", "3 websites", "Admin Pannel", "Cloud Hosted Database", "cloud image hosting", "Bleezing Fast Speed"]

    }]

export default function Pricing() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple no-tricks pricing</h2>
                    <p className="mt-6 text-lg leading-8 text-[#617FAD]">
                        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
                        in. Explicabo id ut laborum.
                    </p>
                </div>

                <div className="flex flex-col space-y-2 mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    {Services.map(service => (
                        <div className='flex rounded-3xl ring-1 ring-gray-200 flex-col sm:flex-col md:flex-col lg:flex-row '>
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-white capitalize">{service.period} Tier</h3>
                                <p className="mt-6 text-base leading-7 text-[#617FAD]">
                                    {service.planDescription}
                                </p>
                                <div className="mt-10 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div>
                                <ul
                                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-300 sm:grid-cols-2 sm:gap-6"
                                >
                                    {service.planIncluded.map((feature) => (
                                        <li key={feature} className="flex gap-x-3 font-bold capitalize">
                                            <FiCheck className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="text-base text-center font-semibold text-gray-600">{service.price === 0 ? "Free Forever" : "Pay once, own it forever" }</p>
                                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">${service.price}</span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                        </p>
                                        <Link
                                            to={"/payment?price=" + service.price}
                                            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Get access
                                        </Link>
                                        <p className="mt-6 text-xs leading-5 text-gray-600">
                                            Invoices and receipts available for easy company reimbursement
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
