import React from 'react'

const Header = () => {
  return (
    <header className='border-b border-slate-200 bg-white'>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div>
                <h1 className='text-2xl font-bold text-slate-900'>
                    Movie Explorer
                </h1>

                <p className='mt-1 text-sm text-slate-500'>
                    Discover your next favorite movie
                </p>
            </div>

            <button className='rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700'>
                Favorites
            </button>
        </div>
    </header>
  )
}

export default Header