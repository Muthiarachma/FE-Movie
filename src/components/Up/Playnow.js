import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Poster from "./Poster";

const API =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=93329c64a1df4170e553ce341ed9daa7&language=en-US&page=1";

function Playnow() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <Container>
      <header className="judul">
        {" "}
        <center>List Movie Playnow</center>{" "}
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Poster key={movie.id} {...movie} />)}
      </div>
    </Container>
  );
}

export default Playnow;
