function MovieCard({ movie }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-80 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-slate-900">
          {movie.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {movie.year}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;