import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [bannerMovie, setBannerMovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=0596dae310f614c7a0bb121e4916e327&language=en-US&page=1`
      )
      .then((res) => {
        setBannerMovie(res.data.results[0]);
      });
  }, []);

  return (
    <div
      className="relative h-[25vh] md:h-[60vh] bg-contain bg-no-repeat bg-center 
      flex items-end rounded-2xl overflow-hidden shadow-lg bg-black"
      style={{
        backgroundImage: `url('${
          bannerMovie?.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}`
            : ""
        }')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

      {/* Movie Title */}
      <div className="relative w-full p-4 md:p-8">
        <h1 className="text-white text-lg md:text-3xl font-bold drop-shadow-lg">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
      </div>
    </div>
  );
}

export default Banner;