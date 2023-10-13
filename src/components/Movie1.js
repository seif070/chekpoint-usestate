import React from 'react';

function Movie1() {
  const movieData = {
    title: 'Blow',
    genre: 'Action',
    description: 'Poussé par lappât du gain, un avocat pénal se lance dans le trafic de drogue à la frontière américano-mexicaine. Fiancé à la belle Laura dont il est éperdument amoureux, il rêve de mener grand train avec elle. Il prend alors conseil auprès de Reiner, un ami déjà impliqué dans le trafic de cocaïne, qui lui ouvre les portes du milieu. Lavocat fait la connaissance de Westray, un intermédiaire en relation directe avec les membres du cartel.',
    rate: 7.8,
    sortie: 2001,
    imageSrc: 'https://m.media-amazon.com/images/I/51ABCZ3C8TL._AC_UF1000,1000_QL80_.jpg',
    trailerLink: 'https://youtu.be/scWkP1GdnuU?si=r4k4zfqHE1SIceIC',
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

export default Movie1;
