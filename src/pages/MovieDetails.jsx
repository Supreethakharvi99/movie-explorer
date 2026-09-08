import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieApi";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        setIsLoading(true);

        const result = await getMovieDetails(id);
        setMovie(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-500">
        Loading movie details...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-500">
        Movie not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      {movie.backdrop_path && (
        <div className="mb-8 overflow-hidden rounded-2xl">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="h-64 w-full object-cover"
          />
        </div>
      )}

      <Link
        to="/"
        className="mb-6 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        ← Back to Movies
      </Link>

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

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>📅 {movie.release_date || "N/A"}</span>

            <span>⭐ {movie.vote_average.toFixed(1)}</span>

            <span>
              ⏱️ {movie.runtime ? `${movie.runtime} min` : "N/A"}
            </span>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              {movie.overview || "No overview available."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;