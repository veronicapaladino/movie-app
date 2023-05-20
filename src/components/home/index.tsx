import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { fetchMovies } from "../../services/movies";
import { Movie } from "../../services/types";
import { IMAGE_PATH } from "../../constants/movies";

export const Home = () => {
  const [movies, setMovies] = useState([] as Movie[]);

  useEffect(() => {
    fetchMovies(true)
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {movies.map((movie) => {
        return (
          <div className="container__movie" key={movie.id}>
            <div className="container__movie--detail">
              <img src={`${IMAGE_PATH + movie.poster_path}`}></img>
              <h4>{movie.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
