import './App.css';
import './styles.css';
import Header from'./components/Header';
import Footer from'./components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (id) => {
    if (watchlist.includes(id)) {
      setWatchlist(watchlist.filter(movieId => movieId !== id));
    }
    else {
      setWatchlist([...watchlist, id]);
    }
  }
  useEffect(() => {
    // Fetch movies from the JSON file stored in the public folder since it is in public folder we dont use url else we could use url too 
    fetch("movies.json")
    //.then is used to convert the response to json as fetch returns a promise
    .then(response => response.json())
    //.then is used to set the movies state with the data fetched
    //setMovies is used to update the state
    .then(data => setMovies(data))
}, []);
  return (
    <div className="App">
      <div className="container">

        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
            <Route path="/watchlist" element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
