import React from 'react';

function Movie6() {
  const movieData = {
    title: 'Immortale',
    genre: 'Action',
    description: 'john W. Creasy, un ex-agent de la CIA devenu alcoolique, se fait  famille bourgeoise de Mexico empêcher un éventuel rapt de sa fille Pita. Les enlèvements sont en effet monnaie courante dans toute lAmérique latine Le garde du corps au bord du suicide exerce froidement son métier dans un premier temps rejetant la fillette de neuf ans qui cherche en lui un ami.',
    rate: 6.8,
    sortie: 2009,
    imageSrc: 'https://fr.web.img4.acsta.net/pictures/21/12/01/11/55/3274106.jpg',
    trailerLink: 'https://youtu.be/fuNcrRMkwtQ?si=Auv1hyMcaqoiYe0I',
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

export default Movie6;
