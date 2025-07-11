import { useEffect } from "react";
import { Card } from "../components/Card";
import useFetch from "../hooks/usefetch";

export const MovieList = ({ api, title }) => {
  const { data: movies } = useFetch(`${api}`);

  useEffect(() => {
    document.title = `${title}/ Cinemate`;
  });
  return (
    <main className="dark:bg-gray-900">
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
