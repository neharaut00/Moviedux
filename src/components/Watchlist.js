import React from "react";
import MovieCard from "./MovieCard";

export default function Watchlist({movies, watchlist, toggleWatchlist}) { 
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                
                {watchlist.map((id) => {
                    const movie = movies.find(movie => movie.id === id);
                    return (
                        <MovieCard
                            movie={movie}
                            key={id}
                            toggleWatchlist={toggleWatchlist}
                            isWatchlist={true}
                        ></MovieCard>
                    );
                
                })}
            </div>
            

        </div>
    );
}