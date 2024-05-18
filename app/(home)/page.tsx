"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch(
        "https://nomad-movies.nomadcoders.workers.dev/movies"
      );
      const data = await res.json();
      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      throw new Error("fetch failed");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>{isLoading ? "Loading... " : JSON.stringify(movies)}</h1>
    </div>
  );
}
