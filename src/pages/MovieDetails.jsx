import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/movieDetails.css"


export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0])
      console.log(data)
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500)

  return <div className="detailsContainer">
    <img src={imageUrl} alt={movie.title} className="movieImage" />
    <div className="movieDetails col">
      <p className="title">
        <strong>Título: </strong>
        {movie.title}
      </p>
      <p >
        <strong>Género: </strong>
        {generos.name}
      </p>
      <p>
        <strong>Descripción: </strong>
        {movie.overview}
      </p>
    </div>
  </div>;
}
