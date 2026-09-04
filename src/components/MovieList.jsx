import React, { useState } from 'react'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar';
import { searchMovies } from '../services/movieApi';

const MovieList = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    
    const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = async (term) => {
        setSearchTerm(term);

        if(!term.trim()){
            setMovies([]);
            return;
        }
        try {
            setIsLoading(true)

           const results = await searchMovies(term);
           setMovies(results); 
        } catch (error) {
            console.error(error);    
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <>
    <SearchBar onSearch={handleSearch} />

    <section className='mx-auto max-w-7xl px-6 py-8'>
        <h2 className='text-2xl font-bold text-slate-900'>
            {searchTerm ? `Results for "${searchTerm}"` : "Explore Movies"}
        </h2>
        {isLoading && (
            <p className='mt-6 text-center text-slate-500'>
                Searching movies...
            </p>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filterMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    </section>
    </>
  )
}

export default MovieList