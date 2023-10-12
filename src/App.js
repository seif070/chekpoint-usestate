import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { useState } from 'react';
import MovieList from './components/Movie/MovieList';
import MovieFilter from './components/search/MovieFilter';
import MovieAdd from './components/Add/MovieAdd';
import data from './components/data';
import MovieDescription from './components/MovieDescription'; 
import Home from './components/Home';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={MovieDescription} /> 
          </Switch>
          <div>
            <MovieFilter setInputTitle={setInputTitle} setInputRate={setInputRate} />
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
