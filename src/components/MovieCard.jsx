function MovieCard({ movie }) {

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <div className="flex h-72 items-center justify-center rounded-lg bg-slate-200">
        <span className="text-slate-400">Movie Poster</span>
      </div>

      <h3 className="mt-4 font-semibold text-slate-900">
        {movie.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {movie.year}
      </p>
    </div>
  );
}

export default MovieCard;