import React from "react";
import { IMovie } from "../../services/types";
import { IMAGE_PATH } from "../../constants/movies";

interface MovieProps {
  movie: IMovie;
  selectMovie: (movie: IMovie) => void;
}

const Movie = ({ movie, selectMovie }: MovieProps) => {
  return (
    <>
      <div className="movie" key={movie.id}>
        <div className="movie__detail" onClick={() => selectMovie(movie)}>
          <img src={`${IMAGE_PATH + movie.poster_path}`}></img>
          <h4>{movie.title}</h4>
        </div>
      </div>
    </>
  );
};

export default Movie;
