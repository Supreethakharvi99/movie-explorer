import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../services/movieApi';

const MovieDetails = () => {

    const {id} = useParams();

    const [movie, setMovie] = useState(null);
    const[isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        const loadMovieDetails = async () => {
            try {
                setIsLoading(true)

                const result = await getMovieDetails(id);
                setMovie(result);
            } catch (error) {
                console.error(error); 
            }finally {
                setIsLoading(false)
            }
        }
        loadMovieDetails();
    },[id])
  if (!movie) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-500">
        Movie not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-xl shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {movie.title}
          </h1>

          <p className="mt-2 text-slate-500">
            {movie.release_date?.slice(0, 4)} · ⭐ {movie.vote_average.toFixed(1)}
          </p>

          <p className="mt-6 leading-7 text-slate-600">
            {movie.overview}
          </p>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;