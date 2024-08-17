import {Link} from 'react-router-dom';

const MovieCard = ({item}) => {
  if (!item?.id) {
    return <div>Invalid movie data</div>;
  }
  const{id, title} = item;
   
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