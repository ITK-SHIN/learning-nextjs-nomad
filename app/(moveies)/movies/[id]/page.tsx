import React, { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../components/movie-info";

interface IParams {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const { title } = await getMovie(id);
  return {
    title: title,
  };
};

const MovieDetail = async ({ params: { id } }: IParams) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
