import axios from "axios";
import React, { useEffect, useState } from "react";
import {Form, Row, Input, Container} from "reactstrap";
import Poster from "./Poster";

function Search() {
  const [movies, setMovies] = useState([]);
  const [kata, setKata] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=93329c64a1df4170e553ce341ed9daa7&language=en-US&query=${kata}&page=1&include_adult=false`,
        { value: kata }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  });

  const handleKata = (e) => {
    setKata(e.target.value);
  };

  return (
    <Container>
        <br></br>
        <br></br>
      <Form >
        <Row md={2}>
              <br></br>
              <Input
                type="text"
                name="judul"
                id="judul"
                value={kata}
                onChange={handleKata}
                placeholder="Enter Title of Movie"
              />
        </Row>
      </Form>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Poster key={movie.id} {...movie} />)}
      </div>
    </Container>
  );
}

export default Search;
