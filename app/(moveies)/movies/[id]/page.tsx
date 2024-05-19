import React, { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
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
