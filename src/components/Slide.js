import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Container } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=93329c64a1df4170e553ce341ed9daa7&language=en-US&page=1`
    )

    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
    }));

    return modifiedData;
  } catch (error) {}
};


 function Slide() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
    };

    fetchAPI();
  }, []);

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 600, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img style={{ height: 400 }} src={item.backPoster} alt={item.title} />
        </div>
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    );
  });
  

  return (
    <Container>
      <div className="row mt-2">
        <div className="col">
          <Carousel
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={500}
            version={4}
            indicators={false}
          >
            {movies}
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
export default Slide;