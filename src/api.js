import axios from 'axios';

const API_KEY = ' http://www.omdbapi.com/?i=tt3896198&apikey=5c697836'; // Replace with your OMDB API key
const BASE_URL = ' http://www.omdbapi.com/apikey.aspx?VERIFYKEY=913dccdc-63bc-4a30-959c-f8dafedd3ef7';

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
