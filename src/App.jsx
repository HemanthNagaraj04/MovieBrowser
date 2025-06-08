import { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieSlider from './components/MovieSlider';
import './App.css';



const fetchMovies = async (query) => {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();
  return data.Search || [];
};

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const [marvel, setMarvel] = useState([]);
  const [batman, setBatman] = useState([]);
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);

  useEffect(() => {
    fetchMovies("marvel").then(setMarvel);
    fetchMovies("batman").then(setBatman);
    fetchMovies("action").then(setAction);
    fetchMovies("drama").then(setDrama);
  }, []);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setSearchResults(results);
    setSearchActive(true);
  };

  return (
    <main>
      <div className="wrapper">
        <img src="./hero.png" alt="hero" className="overlay" />
        <header className="hero-text">
          <h1>ONE STOP FOR ALL YOUR <span className="highlight">MOVIES</span></h1>
        </header>
        <Search onSearch={handleSearch} />
      </div>

      {searchActive ? (
        <MovieSlider title="Search Results" movies={searchResults} />
      ) : (
        <>
          <MovieSlider title="Marvel Universe" movies={marvel} />
          <MovieSlider title="Batman/DC Picks" movies={batman} />
          <MovieSlider title="Action Movies" movies={action} />
          <MovieSlider title="Drama Movies" movies={drama} />
        </>
      )}
    </main>
  );
}

export default App;
