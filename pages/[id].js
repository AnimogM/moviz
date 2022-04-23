import React from "react";
import Image from "next/image";
import { API_KEY } from "../utills/requests";

const detail = ({ details }) => {
  const URL = "https://image.tmdb.org/t/p/original/";
  const na =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-14">
      <Image
        width={1920}
        height={1000}
        className=" transition-all duration-200 ease-in-out overflow-hidden"
        alt={details.title || details.original_name}
        layout="responsive"
        src={`${URL}${details.backdrop_path || details.poster_path}` || na}
      />
      <div className="p-4 md:p-8">
        <h2 className="text-2xl text-white">
          {details.title || details.original_name || "No Name Found"}
        </h2>
        <p className="py-3 font-light text-sm md:text-md">{details.overview}</p>
        <div className="flex gap-3 font-bold">
          {details.media_type}
          {details.release_date || details.first_air_date}
        </div>
      </div>
    </div>
  );
};

export default detail;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`
  );
  const data = await res.json();

  return {
    props: {
      details: data,
    },
  };
};
