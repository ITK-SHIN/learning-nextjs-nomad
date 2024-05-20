import { API_URL } from "../app/utils/util";
import styles from "./movie-videos.module.css";

const getVideos = async (id: string) => {
  // console.log(`Fetching videos: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000)); // 그냥 시간 지연을 위한 코드 5초
  //throw new Error("Error from getVideos");
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
