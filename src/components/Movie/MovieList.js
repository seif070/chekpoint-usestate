import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movie, inputTitle, inputRate, handleDelete, handleCheck }) {
  return (
    <div className='grid-container'>
      {movie
        .filter((el) =>
          el.title.toLowerCase().includes(inputTitle.toLowerCase().trim()) &&
          el.rate >= inputRate
        )
        .map((el) => (
          <MovieCard
            key={el.id}
            el={el}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
}

export default MovieList;
