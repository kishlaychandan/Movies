import React from "react";
// import Movie from '../Movie/Movie'
import style from "./Home.module.css";
import movies from "../../data.js";
import shows from "../../components/shows.js";
function Home() {
  return (
    <>
      <div className={style.home}>
        <h1>Movies</h1>
        <div className={style.cards}>
          {movies.map((movie) => (
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

        {/* TV SHOWS */}

        <h1>TV SHOWS</h1>
        <div className={style.cards}>
          {shows.map((movie) => (
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

export default Home;
