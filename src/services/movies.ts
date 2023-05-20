import axios from "axios";
import { API_KEY, API_URL } from "../constants/movies";

export const fetchMovies = async (searchKey: string) => {
  const type = searchKey ? "search" : "discover";
  const {
    data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });
  return results;
};
