import React, { useState } from "react";
import { moviesData } from "../../Constant/Data";
import Footer from "../Footer/Footer";
import AddMovie from "../AddMovie/AddMovie";
import NavSearch from "../NavSearch/NavSearch";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const [movies, setMovies] = useState(moviesData);
  const handleItem = (item) => {
    setMovies([...movies, item]);
  };

  return (
    <div>
      <NavSearch setSearch={setSearch} setRating={setRating} />
      <div className="MovieList">
        {movies
          .filter(
            (movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase()) &&
              movie.rating >= rating
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        <AddMovie handleItem={handleItem} key={Math.random()} />
      </div>
      <Footer />
    </div>
  );
};

export default MovieList;
