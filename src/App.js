import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import MovieFilter from './components/search/MovieFilter';
import MovieDescription from './components/MovieDescription';
import data from './components/Data';
import MovieList from './components/Movie/MovieList';

function App() {
  const [movie, setMovie] = useState(data);
  const [inputTitle, setInputTitle] = useState('');
  const [inputRate, setInputRate] = useState('');
  const handleDelete = (id) => {
    setMovie(movie.filter((el)=> el.id!==id))

  };
  const handleCheck = (id) => {
    setMovie(movie.map((el)=> el.id===id ?{...el,checked: !el.checked}  : el))


  };



  return (
    
      <div className='App'>
        <h1 style={{ color: 'gold' }}>DexterFlix Homies</h1>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Routes>
          <Route path="/"  element={
                <MovieList
                  movie={movie}
                  inputTitle={inputTitle}
                  inputRate={inputRate}
                  handleDelete={handleDelete}
                  handleCheck={handleCheck}
                />
              }
            />
            
<Route path="/movie/:id" element={<MovieDescription movie={movie} />} />
          </Routes>
          <div>
            <MovieFilter setInputTitle={setInputTitle} setInputRate={setInputRate} />
          </div>
        </div>
      </div>
    
  );
}

export default App;
