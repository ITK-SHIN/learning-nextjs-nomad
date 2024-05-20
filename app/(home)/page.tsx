import { API_URL } from "../utils/util";
import styles from "../(home)/home.module.css";
import Movie from "../../components/movie";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 그냥 시간 지연을 위한 코드 5초
  console.log("I'm fetching 서버에서 발생");
  const res = await fetch(API_URL);
  const data = await res.json();

  return data;
};

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default HomePage;
