import React from 'react';

function Movie3() {
  const movieData = {
    title: 'El Camino',
    genre: 'Action',
    description: 'Après avoir été libéré par Walter White du repaire du gang de Jack où il était séquestré, Jesse Pinkman doit se réconcilier avec son passé pour pouvoir prétendre à un avenir plus radieux, alors quil se trouve traqué par les forces de lordre.',
    rate: 7.8,
    sortie: 2020,
    imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuEzZgS_3oHR0HtGuwtiKa-9-Qwc381LXHAxnaV0JHtURP07iv',
    trailerLink: 'https://youtu.be/1JLUn2DFW4w?si=kEUp8csV3-qJLAmr',
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

export default Movie3;
