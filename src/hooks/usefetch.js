import { useEffect, useState } from "react";
// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}";

export default function useFetch(api, queryTerm = "") {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}?query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`${url}`, {
        headers: {
          Authorization: ` Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDVlMDU5MjYzNWVhMzc3NjM5MjU4YTZhNTIwMDZhOCIsIm5iZiI6MTczNzMxNDU0OS43MDUsInN1YiI6IjY3OGQ1MGY1OWQ1ZTM2M2QxOTY0ZDYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vZz45rZaIonu8nYFdzRJ9WhvJsyC3YIpG0qgBWnNKw`,
        },
      });
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
}
