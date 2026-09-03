import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        conSearch(searchTerm);
        
    }
  return (

    <section className='mx-auto max-w-7xl px-6 pt-8'>

        <div className="relative">

            <input
            type='text'
            placeholder='Search for a movie...'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
            />

            <button 
            onClick={handleSearch}
            className='absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700'>
            Search
            </button>
        </div>
    </section>
  )
}

export default SearchBar