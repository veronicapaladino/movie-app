import React, { useState } from "react";
import { IMovie, MovieVideos, Result } from "../../services/types";
import { IMAGE_PATH } from "../../constants/movies";
import { fetchMovieVideos } from "../../services/movies";
import Trailer from "../trailer";

interface MovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [trailer, setTrailer] = useState<Result>({} as Result);

  const selectMovie = async (movieSelected: IMovie) => {
    fetchMovieVideos(movieSelected.id)
      .then((data) => {
        if (data.results) {
          const trailer = data.results.find(
            (vid) => vid.name === "Official Trailer"
          );
          setTrailer(trailer ? trailer : data.results[0]);
        }
      })
      .catch((error) => console.log(error));

    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="movie" key={movie.id}>
        <div className="movie__detail" onClick={() => selectMovie(movie)}>
          <img src={`${IMAGE_PATH + movie.poster_path}`}></img>
          <h4>{movie.title}</h4>
        </div>
      </div>
      <Trailer movie={selectedMovie} trailer={trailer} />
    </>
  );
};

export default Movie;
