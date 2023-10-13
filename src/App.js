import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import MovieFilter from './components/search/MovieFilter';
import data from './components/data';
import MovieDescription from './components/MovieDescription';
import Home from './components/Home';
import Movie1 from './components/Movie1';
import Movie2 from './components/Movie2';
import Movie3 from './components/Movie3';
import Movie4 from './components/Movie4';
import Movie5 from './components/Movie5';
import Movie6 from './components/Movie6';

function App() {
  const [movie, setMovie] = useState(data);
  const [inputTitle, setInputTitle] = useState('');
  const [inputRate, setInputRate] = useState('');

  return (
    <Router>
      <div className='App'>
        <h1 style={{ color: 'gold' }}>DexterFlix Homies</h1>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Routes>
<Route path="/" element={<Home />} />
<Route path="/movie/:id" element={<MovieDescription movie={movie} />} />
<Route path="/movie1" element={<Movie1 />} />
<Route path="/movie2" element={<Movie2 />} />
<Route path="/movie3" element={<Movie3 />} />
<Route path="/movie4" element={<Movie4 />} />
            
              <Route path="/movie5" element={<Movie5 />} />
          
            <Route path="/movie6" element={<Movie6 />} />
          </Routes>
          <div>
            <MovieFilter setInputTitle={setInputTitle} setInputRate={setInputRate} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
