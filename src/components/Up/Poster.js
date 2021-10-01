import React from "react";
import AddFav from "./AddFav";

const Image = "https://image.tmdb.org/t/p/w500";

const Poster = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={Image + poster_path} alt={title} />
    <div className="movie-info">
      <h6 style={{fontFamily: 'calibri', fontWeight: 'bold'}}>{title}</h6>
      <h5>{vote_average}</h5>
    </div>

    <div className="movie-over">
        <h6>Overview: </h6>
        <p style={{fontSize:'small'}}>{overview}</p>
        <AddFav/>
    </div>
  </div>
);

export default Poster;
