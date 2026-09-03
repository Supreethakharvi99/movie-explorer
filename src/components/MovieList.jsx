import React from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
    const movies = [
        {
            id:1,
            title: "Inception",
            year:2010
        },
        {
            id:2,
            title: "Interstellar",
            year:2014
        },
        {
            id:3,
            title:"The Dark Knight",
            year: 2008
        }
    ]
  return (
    <section className='mx-auto max-w-7xl px-6 py-8'>
        <h2 className='text-2xl font-bold text-slate-900'>
            Explore Movies
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    </section>
  )
}

export default MovieList