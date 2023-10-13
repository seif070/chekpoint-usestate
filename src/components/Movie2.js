import React from 'react';

function Movie2() {
  const movieData = {
    title: 'La Plateforme',
    genre: 'Action',
    description: 'Dans le futur, des prisonniers sont détenus dans des cellules verticales. Ceux qui logent dans les cellules supérieures sont nourris, tandis que ceux des cellules inférieures meurent de faim. Goreng, un détenu fraîchement débarqué, va se battre pour changer le système.',
    rate: 7.8,
    sortie: 2020,
    imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJHg57lYxrDQj8mqKk52Ky0XjL8FlkwlV6uBeOaXvUEBEwISqD',
    trailerLink: 'https://youtu.be/RlfooqeZcdY?si=02QvsYYv12oAPEiJ',
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

export default Movie2;
