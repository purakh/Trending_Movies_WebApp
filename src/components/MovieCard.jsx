import React from "react";

function MovieCard({
  handleAddToWatchList,
  movie,
  handleRemoveFromWatchList,
  watchList,
}) {
  const isInWatchList = watchList.some((item) => item.id === movie.id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : "";

  return (
    <div
      className="group relative h-[40vh] w-[220px] overflow-hidden rounded-xl bg-zinc-900 bg-cover bg-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ backgroundImage: `url(${posterUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

      <button
        onClick={() =>
          isInWatchList
            ? handleRemoveFromWatchList(movie)
            : handleAddToWatchList(movie)
        }
        className={`absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          isInWatchList
            ? "hover:bg-red-500"
            : "hover:bg-emerald-500"
        }`}
        aria-label={isInWatchList ? "Remove from watchlist" : "Add to watchlist"}
      >
        {isInWatchList ? "✕" : "♥"}
      </button>

      <div className="absolute bottom-0 z-10 w-full p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-tight text-white drop-shadow">
          {movie.original_title}
        </h3>

        {movie.release_date && (
          <p className="mt-1 text-sm text-zinc-300">
            {movie.release_date.slice(0, 4)}
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieCard;