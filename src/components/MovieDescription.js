import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDescription({ movie }) {
  const { id } = useParams();
  const selectedMovie = movie.find((movie) => movie.id === parseInt(id));

  if (!selectedMovie) {
    return <div>Le film n'a pas été trouvé.</div>;
  }

  const openTrailer = () => {
    window.open(selectedMovie.trailerLink, '_blank');
  };

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>{selectedMovie.description}</p>
      <iframe
        title="Bande-annonce"
        width="560"
        height="315"
        src={selectedMovie.trailerLink}
        allowFullScreen
      ></iframe>
      <a href={selectedMovie.trailerLink} target="_blank" rel="noopener noreferrer">
        Regarder la bande-annonce
      </a>
      <button onClick={openTrailer}>Regarder la bande-annonce</button>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}

export default MovieDescription;
