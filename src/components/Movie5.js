import React from 'react';

function Movie5() {
  const movieData = {
    title: 'Man on Fire',
    genre: 'Action',
    description: 'John W. Creasy, un ex-agent de la CIA devenu alcoolique, se fait engeffet monnaie courante dans toute lAmérique latine Le garde du corps au bord du suicide exerce froidement son métier dans un premier temps rejetant la fillette de neuf ans qui cherche en lui un ami.',
    rate: 6.8,
    sortie: 2009,
    imageSrc: 'https://musicart.xboxlive.com/7/d50c1200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    trailerLink: 'https://youtu.be/eDDh50B6kA4?si=Qk7rJcLNvR9fDgP1',
  };

  return (
    <div>
      <h2>{movieData.title}</h2>
      <p>Genre: {movieData.genre}</p>
      <p>Description: {movieData.description}</p>
      <p>Rate: {movieData.rate}</p>
      <p>Sortie: {movieData.sortie}</p>
      <img src={movieData.imageSrc} alt={movieData.title} />
      <a href={movieData.trailerLink} target="_blank" rel="noopener noreferrer">
        Regarder la bande-annonce
      </a>
    </div>
  );
}

export default Movie5;
