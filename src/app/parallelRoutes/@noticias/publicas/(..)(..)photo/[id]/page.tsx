import Link from "next/link";

export default function Photo() {
    return (
        <Link href={"/photo/123"} className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img className="w-[48rem] max-w-none rounded-xl cursor-pointer bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
        </Link>
    )
}
