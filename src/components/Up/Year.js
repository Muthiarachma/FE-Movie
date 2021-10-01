import axios from "axios";
import React, { useEffect, useState } from "react";
import {Form, Row, Input} from "reactstrap";
import { Container } from "reactstrap";
import Poster from "./Poster";

function Year() {
  const [movies, setMovies] = useState([]);
  const [tahun, setTahun] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=93329c64a1df4170e553ce341ed9daa7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${tahun}&with_watch_monetization_types=flatrate`,
        { value: tahun }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  });

  const handleTahun = (e) => {
    setTahun(e.target.value);
  };

  return (
    <Container>
        <br></br>
        <br></br>
      <Form >
        <Row md={5}>
              <br></br>
              <Input
                type="text"
                name="year"
                id="year"
                value={tahun}
                onChange={handleTahun}
                placeholder="Enter Year of Movie"
              />
        </Row>
      </Form>

      <header className="judul">
        <center>List Movie</center>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Poster key={movie.id} {...movie} />)}
      </div>
    </Container>
  );
}

export default Year;
