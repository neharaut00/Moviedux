import React, { useState, useEffect }from 'react';
import '../styles.css';
import MovieCard from './MovieCard';
import Watchlist from './Watchlist';

export default function MoviesGrid({movies, watchlist, toggleWatchlist}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState('All Genre');
    const [rating, setRating] = useState('All');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    //the below function is used to filter the movies based on the genre selected
    //checks if the genre selected is 'All Genre' or if the genre of the movie matches the genre selected
    const matchesGenre = (movie, genre) => {
        return ( genre === 'All Genre' || 
            movie.genre.toLowerCase() === genre.toLowerCase());
    }

    const matchesRating = (movie, rating) => {
        switch(rating){
            case 'All':
                return true;
            case 'Good':
                return movie.rating >= 8;
            case 'Okay':
                return movie.rating >= 5 && movie.rating < 8;
            case 'Bad':
                return movie.rating < 5;
            default:
                return
        }
    }

    const filteredMovies = movies.filter(movie => (
        matchesGenre(movie, genre) && matchesSearchTerm(movie, searchTerm) && matchesRating(movie, rating)
    ));

    return (
        <div>
            <input className='search-input' 
                type='text'
                placeholder='Search movies...'
                value={searchTerm}
                onChange={handleSearchChange}
                 />
            <div className = 'filter-bar'>
                <div className='filter-slot'>
                <label>Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
                        <option value='All Genre'>All Genre</option>
                        <option value='Action'>Action</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Drama'>Drama</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Horror'>Horror</option>
                        <option value='Romance'>Romance</option>
                        <option value='Sci-Fi'>Sci-Fi</option>
                    </select>
                </div>
                <div className='filter-slot'>
                <label>Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
                        <option value='All'>All</option>
                        <option value='Good'>Good</option>
                        <option value='Okay'>Okay</option>
                        <option value='Bad'>Bad</option>
                    </select>
                </div>
            </div>
            
            <div className='movies-grid'>
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} isWatchlist={watchlist.includes(movie.id)} toggleWatchlist={toggleWatchlist}/>
                ))}
            </div>
        </div>
        
    )
}