"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopMenu() {

    const pathname = usePathname()

    const urls = [{ name: "Contact", url: "/contact" }, { name: "Dashboard", url: "/dashboard" }, { name: "Perfil", url: "/dashboard/perfil" }, { name: "Ruta Paralela", url: "/parallelRoutes" }]

    return (
        <div className="bg-red-500 text-white py-4">
            <nav className="flex justify-between max-w-[1400px] mx-auto">
                <h2><Link href={"/"}>LOGO</Link></h2>
                <ul className="flex gap-5">
                    {
                        urls.map(ruta => (
                            <li key={ruta.name}><Link href={ruta.url} className={`${pathname === ruta.url && "underline"} `}>{ruta.name}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
