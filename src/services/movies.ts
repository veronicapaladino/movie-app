import axios from "axios";
import { API_KEY, API_URL } from "../constants/movies";
import { IMovie } from "./types";

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
export const fetchMovie = async (movieId: number): Promise<IMovie> => {
  const { data } = await axios.get(`${API_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY.toString().trim(),
      append_to_response: "video",
    },
  });
  return data;
};
