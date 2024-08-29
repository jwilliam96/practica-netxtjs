import Link from "next/link";

export default async function Card() {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <article data-popover="profile-info-popover"
            className="mt-10 ml-10 absolute max-w-[24rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
            <div className="flex items-center justify-between gap-4 mb-2">

                <button
                    className="select-none rounded-lg bg-gray-900 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button" data-ripple-light="true">
                    Follow
                </button>
            </div>
            <h6
                className="flex items-center gap-2 mb-2 font-sans text-base antialiased font-medium leading-relaxed tracking-normal text-blue-gray-900">
                <span>Tania Andrew</span> •{" "}
                <Link className="text-sm text-blue-gray-700" href="#">
                    @andrew
                </Link>
            </h6>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                A skilled developer with a passion for creating innovative solutions and a proven track record in full-stack development. Adept at working with a variety of technologies to build robust applications.
            </p>
            <div className="flex items-center gap-8 pt-4 mt-6 border-t border-blue-gray-50">
                <p className="flex items-center gap-1 font-sans text-xs antialiased font-normal text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                        aria-hidden="true" className="-mt-0.5 h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                    </svg>
                    United Kingdom
                </p>
                <Link href="#" className="flex items-center gap-1 font-sans text-xs antialiased font-normal text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                        aria-hidden="true" className="-mt-0.5 h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z">
                        </path>
                    </svg>
                    Material Tailwind
                </Link>
            </div>
        </article>
    )
}
