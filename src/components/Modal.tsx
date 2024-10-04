'use client'

import { useRouter } from 'next/navigation'

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    return (
        <div >
            <div className='absolute inset-0 bg-slate-900 bg-opacity-80 z-40 min-h-screen h-full'
                onClick={() => {
                    router.back()
                }} />

            <button
                className='text-white'
                onClick={() => {
                    router.back()
                }}
            >
                Close modal
            </button>
            <div className=' mt-20 fixed left-1/2 -translate-x-1/2 z-50'>
                {children}
            </div>
        </div>
    )
}