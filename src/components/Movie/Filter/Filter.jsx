import React, { useState } from "react";
import style from "./Filter.module.css";
import Select from "react-select";

function Filter({ movies, setMovies, filteredMovies, setFilteredMovies ,title }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genresOptions = [
    { value: "Action", label: "Action" },
    { value: "Sci-Fi", label: "Sci-Fi" },
    { value: "Drama", label: "Drama" },
    { value: "Comedy", label: "Comedy" },
    // Add more genres here
  ];
    const handleGenreChange = (selectedOptions) => {
    setSelectedGenres(selectedOptions);
    const genres = selectedOptions.map((option) => option.value);
    if (genres.length === 0) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre.some((genre) => genres.includes(genre))
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className={style.filter}>
      <div className={style.filter}>
        <h1>Explore {title}</h1>
      </div>
      <div className={style.right}>
        <Select
          isMulti
          options={genresOptions}
          className="basic-multi-select"
          onChange={handleGenreChange}
        />
        <div className="sort by">Sort by</div>
      </div>
    </div>
  );
}

export default Filter;
