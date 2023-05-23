
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Movies from './Movies';
import MovieView from './MovieView';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Movies/>} />
        <Route path='/viewMovie/:id' element={<MovieView/>} />
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
