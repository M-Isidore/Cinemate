import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import useFetch from "../hooks/usefetch";
import { useEffect } from "react";

export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(`${api}`, queryTerm);

  useEffect(() => {
    document.title = `Search result for ${queryTerm}/ Cinemate`;
  });

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for ${queryTerm}`
            : `Results for ${queryTerm}`}
        </p>
      </section>
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
