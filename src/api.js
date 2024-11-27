import axios from 'axios';

const API_KEY = 'your_api_key_here'; // Replace with your OMDB API key
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Error: error.message };
  }
};
