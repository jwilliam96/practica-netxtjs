'use client'

import { useRouter } from 'next/navigation'

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    return (
        <div className='absolute inset-0 bg-slate-900 bg-opacity-80 z-50 min-h-screen h-full'>
            <button
                className='text-white'
                onClick={() => {
                    router.back()
                }}
            >
                Close modal
            </button>
            <div className='flex justify-center items-center '>{children}</div>
        </div>
    )
}