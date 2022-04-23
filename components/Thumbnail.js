import Image from "next/image";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import Link from "next/link";

const Thumbnail = ({ result }) => {
  const URL = "https://image.tmdb.org/t/p/original/";

  return (
    <Link href={`/${result.id}`}>
      <div className="group cursor-pointer">
        <Image
          width={1920}
          height={1000}
          className="group-hover:scale-150 transition-all duration-200 ease-in-out overflow-hidden"
          alt={result.title || result.original_name}
          layout="responsive"
          src={`${URL}${result.backdrop_path || result.poster_path}`}
        />
        <div className="pt-2">
          <p className="text-sm py-1 font-light truncate">{result.overview}</p>
          <h2 className="text-white">{result.title || result.original_name}</h2>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-baseline text-xs">
            {result.media_type}
            {result.release_date || result.first_air_date}
            <FaThumbsUp />
            {result.vote_count}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
