import React from "react";
import Thumbnail from "./Thumbnail";

export const Result = ({ results }) => {
  console.log(results);
  return (
    <div className="p-3 2xl:flex flex-wrap gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};
