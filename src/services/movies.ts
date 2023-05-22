import axios from "axios";
import { API_KEY, API_URL } from "../constants/movies";
import { IMovie, MovieVideos } from "./types";

// Todos los endpoints de la API de peliculas estan detallados en https://developer.themoviedb.org/docs/getting-started/introduction

// Obtiene listado de peliculas populares
export const fetchMovies = async (): Promise<IMovie[]> => {
  const type = "popular";
  const {
    data: { results },
  } = await axios.get(`${API_URL}/movie/${type}`, {
    params: {
      api_key: API_KEY.toString().trim(),
    },
  });
  return results;
};

// Obtiene listado de peliculas populares
export const searchMovies = async (query = ""): Promise<IMovie[]> => {
  const {
    data: { results },
  } = await axios.get(`${API_URL}/search/movie`, {
    params: {
      api_key: API_KEY.toString().trim(),
      query: query,
    },
  });
  return results;
};

// Obtiene detalle de pelicula
export const fetchMovieVideos = async (
  movieId: number
): Promise<MovieVideos> => {
  const { data } = await axios.get(`${API_URL}/movie/${movieId}/videos`, {
    params: {
      api_key: API_KEY.toString().trim(),
      append_to_response: "video",
    },
  });
  return data;
};
