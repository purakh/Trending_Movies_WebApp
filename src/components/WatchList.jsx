import { React, useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import genreids from "../Utility/genres";

function WatchList({ watchList, handleRemoveFromWatchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genresList, setGenresList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncrease = () => {
    let sortedincreasing = watchList.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchList([...sortedincreasing]);
  };

  let sortDecrease = () => {
    let sortedecreasing = watchList.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchList([...sortedecreasing]);
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    temp = [...new Set(temp)];
    setGenresList(["All Genres", ...temp]);
  }, [watchList]);

  return (
    <>
      {/* Genre Filter */}
      <div className="flex justify-center flex-wrap gap-3 p-4">
        {genresList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={`px-5 py-2 rounded-full cursor-pointer font-medium 
              transition duration-300 shadow-sm
              ${
                currentGenre === genre
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <div className="relative w-[90%] md:w-1/3">
          <input
            onChange={handleSearch}
            value={search}
            type="text"
            placeholder="Search Movies..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 
            focus:outline-none focus:ring-2 focus:ring-blue-400 
            shadow-sm"
          />
          <i className="fa fa-search absolute left-3 top-4 text-gray-400"></i>
        </div>
      </div>

      {/* Table */}
      <div className="m-4 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-gray-600">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="text-left px-6 py-3">Movie</th>
              <th className="py-3">
                <div className="flex items-center justify-center gap-2">
                  <i
                    onClick={sortIncrease}
                    className="fa fa-arrow-up cursor-pointer hover:text-blue-400"
                  />
                  Rating
                  <i
                    onClick={sortDecrease}
                    className="fa fa-arrow-down cursor-pointer hover:text-blue-400"
                  />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {watchList
              .filter((movie) => {
                if (currentGenre === "All Genres") return true;
                return genreids[movie.genre_ids[0]] === currentGenre;
              })
              .filter((movie) => {
                return (
                  movie.original_title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  movie.overview
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
              })
              .map((movie, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="flex items-center gap-6 px-6 py-4">
                      <img
                        className="h-20 rounded-lg shadow"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.original_title}
                      />
                      <div className="font-semibold">
                        {movie.original_title}
                      </div>
                    </td>

                    <td className="text-center font-medium">
                      ⭐ {movie.vote_average}
                    </td>

                    <td className="text-center">{movie.popularity}</td>

                    <td className="text-center">
                      {genreids[movie.genre_ids[0]]}
                    </td>

                    <td className="text-center">
                      <button
                        onClick={() => handleRemoveFromWatchList(movie)}
                        className="px-4 py-1 bg-red-500 text-white 
                        rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;