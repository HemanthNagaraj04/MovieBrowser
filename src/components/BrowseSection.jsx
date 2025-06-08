
const BrowseSection = ({ title, movies }) => {
  return (
    <section className="browse-container">
      <h2 className="browse-title">{title}</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "no-image.png"} alt={movie.Title} />
            <p className="movie-title">{movie.Title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseSection;
