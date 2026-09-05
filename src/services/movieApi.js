const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
    options
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();

  return data.results;
};

export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular`,
        options
    );

    if(!response.ok) {
        throw new Error("Failed to fetch popular movies")
    }

    const data = await response.json();

    return data.results;
}

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}`,
    options
  );

  if(!response.ok){
    throw new Error("Failed to fetch movie details");
  }

  const data = await response.json();

  return data;
}