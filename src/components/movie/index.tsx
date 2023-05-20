import React from "react";
import YouTube from "react-youtube";
import { IMovie } from "../../services/types";
import { IMAGE_PATH } from "../../constants/movies";

interface MovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <div className="movie" key={movie.id}>
      <div className="movie__detail">
        <img src={`${IMAGE_PATH + movie.poster_path}`}></img>
        <h4>{movie.title}</h4>
      </div>
    </div>
  );
};

export default Movie;
