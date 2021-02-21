import React, { useState } from "react";
import { moviesData } from "../../Constant/Data";
import Footer from "../../Footer/Footer";
import AddMovie from "../AddMovie/AddMovie";
import Filter from "../Filter/Filter";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const [search, setSearch] = useState({ inputText: "" });
  const [rating, setRating] = useState(0);
  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };
  const handleRating = (newRating) => {
    setRating(newRating);
  };
  const [movies, setMovies] = useState(moviesData);
  const handleItem = (item) => {
    setMovies([...movies, item]);
  };

  return (
    <div>
      <Filter handleSearch={handleSearch} handleRating={handleRating} />
      <div className="MovieList">
        {movies
          .filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(search.inputText.toLowerCase()) &&
              movie.rating >= rating
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        <AddMovie handleItem={handleItem} />
      </div>
      <Footer/>
    </div>
  );
};

export default MovieList;
