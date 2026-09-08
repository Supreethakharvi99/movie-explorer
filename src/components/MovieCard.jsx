import { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie ,onRemoveFav}) {

  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    return savedFavorites.some((favorite) => favorite.id === movie.id)
  })

  const toggleFavorite = () => {
  const savedFavorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (isFavorite) {
    const updatedFavorites = savedFavorites.filter(
      (favorite) => favorite.id !== movie.id
    );


    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(false);

    if(onRemoveFav){
      onRemoveFav(movie.id)
    }
  } else {
    const updatedFavorites = [...savedFavorites, movie];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(true);
  }
};

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

  const releaseYear = movie.release_date ? movie.release_date.slice(0,4) : "N/A"

  return (
  <div className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

    <Link
    to={`/movie/${movie.id}`}>
      {posterUrl ? (
        <img
        src={posterUrl}
        alt={movie.title}
        className="h-80 w-full object-cover"
        />  
        
      ) : (
        <div className="flex h-80 items-center justify-center rounded-lg bg-slate-200">
        <span className="text-slate-400">No Poster</span>
      </div>

      )}
      </Link>

      
      <div className="p-4">
        <div >
          <h3 className="mt-4 font-semibold text-slate-900">
        {movie.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {releaseYear}
      </p>
        </div>

        <button
        type="button"
        onClick={toggleFavorite}
        className="rounded-full p-2 text-xl transition hover:bg-red-50">
          {isFavorite ? "❤️" : "♡"}
        </button>
      </div>
      </div>
  );
}

export default MovieCard;