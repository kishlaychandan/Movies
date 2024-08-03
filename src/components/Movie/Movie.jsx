import React, { useEffect, useState } from "react";
import style from "./Movie.module.css";
import Filter from "./Filter/Filter.jsx";
function Movie({moviesData,title}) {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  useEffect(() => {
    setMovies(moviesData);
    setFilteredMovies(moviesData);
  }, [moviesData]);
  return (
    <>
      <div className={style.movies}>
        {/* <Nav /> */}
        <Filter movies={movies} filteredMovies={filteredMovies} title={title} setFilteredMovies={setFilteredMovies}/>
        <div className={style.cards}>
          {filteredMovies.map((movie) => (
            <div className={style.card} key={movie.id}>
              <div className={style.image}>
                <img src={movie.image} alt={movie.title} />
                <p className={style.rating}>{movie.rating} </p>
                <div className={style.genre}>
                {movie.genre.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
              </div>
              </div>
              <h3 className={style.title}>{movie.title}</h3>

              
              <p className={style.date}>{movie.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movie;
