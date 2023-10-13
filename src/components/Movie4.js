import React from 'react';

function Movie4() {
  const movieData = {
    title: 'Gladiator',
    genre: 'Action',
    description: 'Le général romain Maximus est le plus fidèle soutien de lempereur Marc Aurèl ilui voue lempereur, le fis de Marc Aurèle, Commode, sarroge brutalemnt le pouvoir puis ordonne larrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand desclaves il devient gladiateur et prépare sa vengeance.',
    rate: 8.8,
    sortie: 2001,
    imageSrc: 'https://m.media-amazon.com/images/I/61MSIFHAxML._AC_UF894,1000_QL80_.jpg',
    trailerLink: 'https://youtu.be/P5ieIbInFpg?si=q20A_FXVaPPf8YwV',
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

export default Movie4;
