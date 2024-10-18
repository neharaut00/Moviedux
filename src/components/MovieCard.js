import React from 'react';
import '../styles.css';

export default function MovieCard({movie, isWatchlist, toggleWatchlist}) {
    return(
    <div key={movie.id} className='movie-card'>
            <img src={`images/${movie.image}`}   alt = {movie.title} />
            <div className='movie-card'>
                <h3 className='movie-card-title'>{movie.title}</h3>
                <div>
                    <span className='movie-card-genre'> {movie.genre}</span>
                    <span className='movie-card-rating'> {movie.rating}</span>
                </div>
                <label className='switch'>
                    <input type='checkbox'
                        checked={isWatchlist}
                        onChange={()=> toggleWatchlist(movie.id)}
                    ></input>
                    <span className='slider'>
                        <span className='slider-label'>
                            {isWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
                        </span>
                    </span>
                </label>
            </div>
        </div>
    )
}