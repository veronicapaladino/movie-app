import axios from "axios";
import { API_KEY, API_URL } from "../constants/movies";
import { Movie } from "./types";

export const fetchMovies = async (
  discover: boolean,
  query = ""
): Promise<Movie[]> => {
  const type = discover ? "discover" : "search";
  const {
    data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY.toString().trim(),
      query: query,
    },
  });
  return results;
};
