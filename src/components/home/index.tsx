import React, { useState, useEffect } from "react";
import { fetchMovies, searchMovies } from "../../services/movies";
import { IMovie } from "../../services/types";
import Movie from "../movie";

export const Home = () => {
  const [movies, setMovies] = useState([] as IMovie[]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies(searchKey)
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  };

  console.log(movies);
  return (
    <>
      <form className="searchbox" onSubmit={onSubmitSearch}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>
      <div className="container">
        {movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
};
