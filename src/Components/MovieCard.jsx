function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert(`You clicked`);
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={`${movie.title} poster`} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}></button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    </div>
  );
}

export default MovieCard;