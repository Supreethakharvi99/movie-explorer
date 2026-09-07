import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const Favorites = () => {
    const [fav, setFav] = useState([]);

    useEffect(() => {
        const savedFav = JSON.parse(
            localStorage.getItem("favorites") || "[]"
        );

        setFav(savedFav);
    })
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
        <h1 className='text-2xl font-bold text-slate-900'>
            My Favorites
        </h1>

        {fav.length === 0 ? (
            <p className='mt-2 text-slate-500'>
            Your favorite movies will appear here.
          </p>
        ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fav.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        )}
    </main>
  )
}

export default Favorites