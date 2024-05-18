export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // 그냥 시간 지연을 위한 코드 5초
  console.log("I'm fetching 서버에서 발생");
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <div>
      <h1>{JSON.stringify(movies)}</h1>
    </div>
  );
};

export default HomePage;
