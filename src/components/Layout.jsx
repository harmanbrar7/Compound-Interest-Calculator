import React from 'react'

export default function Layout(props) {
    const {children} = props
    return (
        <div className='min-h-screen bg-slate-900 text-white flex flex-col gap-10 sm: gap-12 md:gap-15 p-4'>
            <header className='flex flex-col gap-4 items-center justify-center max-w-[800px] pt-16 sm:pt-20 w-full mx-auto'>
                <h1 className='text-4xl sm:text-5xl md: text-6xl font-semibold text-center'>Compound Interest Calculator</h1>
                <p className='text-center text-slate-200 text-sm md:text-base'>You either earn it or pay it...</p>

                <div className='flex items-center gap-4 text-2xl sm: text-3xl md: text-4xl'>
    
                <i class="fa-solid fa-money-check-dollar"></i>
                <i class="fa-solid fa-money-bill-trend-up"></i>
                <i class="fa-solid fa-scale-unbalanced"></i>

                </div>
            </header>
            <main className='flex-1 flex-col gap-6 max-w-[600px] w-full mx-auto'>
                {children}
            </main>
            <footer></footer>

        </div>
    )
}
