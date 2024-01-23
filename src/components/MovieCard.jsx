import styles from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id} >
        <img
          src={imageUrl}
          width={230}
          height={345}
          alt={movie.title}
          className={styles.movieImage}
        />
      </Link>
      <div>{movie.title}</div>
      
    </li>
  );
}
