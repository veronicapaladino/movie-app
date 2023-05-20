import React, { useState, useEffect } from "react";
import {
  fetchMovieVideos,
  fetchMovies,
  searchMovies,
} from "../../services/movies";
import { IMovie, Result } from "../../services/types";
import Movie from "../movie";
import Trailer from "../trailer";

export const Home = () => {
  const [movies, setMovies] = useState([] as IMovie[]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [trailer, setTrailer] = useState<Result>({} as Result);

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setMovies(data);
        setSelectedMovie(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies(searchKey)
      .then((data) => {
        setMovies(data);
        setSelectedMovie(data[0]);
      })
      .catch((error) => console.log(error));
  };

  const selectMovie = async (movieSelected: IMovie) => {
    fetchMovieVideos(movieSelected.id)
      .then((data) => {
        if (data.results) {
          const trailer = data.results.find(
            (vid) => vid.name === "Official Trailer"
          );
          setTrailer(trailer ? trailer : data.results[0]);
          setSelectedMovie(movieSelected);
        }
      })
      .catch((error) => console.log(error));

    window.scrollTo(0, 0);
  };

  return (
    <>
      <h2 className="title">Trailer Popular Movies</h2>
      <form className="searchbox" onSubmit={onSubmitSearch}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="searchbox__button">Search</button>
      </form>
      <Trailer selectedMovie={selectedMovie} trailer={trailer} />
      <div className="container">
        {movies.map((movie) => {
          return (
            <Movie movie={movie} key={movie.id} selectMovie={selectMovie} />
          );
        })}
      </div>
    </>
  );
};
