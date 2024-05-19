import { API_URL } from "../app/utils/util";

const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 그냥 시간 지연을 위한 코드 5초

  throw new Error("Error from getVideos");
  /*  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();  */
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return <h1>{JSON.stringify(videos)}</h1>;
}
