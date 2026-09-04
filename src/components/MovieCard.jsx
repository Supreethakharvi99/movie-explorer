function MovieCard({ movie }) {

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

  const releaseYear = movie.release_date ? movie.release_date.slice(0,4) : "N/A"

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      
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
      
      <div className="p-4">
        <h3 className="mt-4 font-semibold text-slate-900">
        {movie.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {releaseYear}
      </p>
      </div>
    </div>
  );
}

export default MovieCard;