import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <nav className='flex justify-center gap-20 py-10'>
                    <Link href="/parallelRoutes/privadas" className='border rounded-full px-6 py-2 bg-red-500 text-white font-bold'>Privadas</Link>
                    <Link href="/parallelRoutes/publicas" className='border rounded-full px-6 py-2 bg-red-500 text-white font-bold'>Publicas</Link>
                    <Link href="/parallelRoutes" className='border rounded-full px-6 py-2 bg-red-500 text-white font-bold'>Inicio</Link>
                </nav>

                {children}
            </div>
        </>
    )
}