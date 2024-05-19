import { API_URL } from "../app/utils/util";

const getMovie = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000)); // 그냥 시간 지연을 위한 코드 5초
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return <div>{JSON.stringify(movie)}</div>;
}
