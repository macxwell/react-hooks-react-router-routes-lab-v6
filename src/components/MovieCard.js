import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {<button className="movie-button">
        <Link to={`/movie/${id}`}>View Info</Link>
      </button>}
    </article>
  );
};

export default MovieCard;