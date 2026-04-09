import React from "react";

function MovieCard({
  handleAddToWatchList,
  movie,
  handleRemoveFromWatchList,
  watchList,
}) {
  function doesContain(movie) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="relative h-[40vh] w-[200px] bg-center bg-cover rounded-2xl 
      hover:scale-105 duration-300 cursor-pointer shadow-lg hover:shadow-2xl 
      flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Watchlist Button */}
      <div className="relative flex justify-end p-3">
        {doesContain(movie) ? (
          <button
            onClick={() => handleRemoveFromWatchList(movie)}
            className="bg-black/60 backdrop-blur-md p-2 rounded-full 
            hover:bg-red-500 transition duration-300"
          >
            ❌
          </button>
        ) : (
          <button
            onClick={() => handleAddToWatchList(movie)}
            className="bg-black/60 backdrop-blur-md p-2 rounded-full 
            hover:bg-green-500 transition duration-300"
          >
            ❤️
          </button>
        )}
      </div>

      {/* Movie Title */}
      <div className="relative text-white text-lg font-semibold p-3">
        {movie.original_title}
      </div>

    </div>
  );
}

export default MovieCard;