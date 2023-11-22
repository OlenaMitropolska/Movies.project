
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import moviesData from "./data/data.json"
import Home from './components/Home';
import MoviesPage from './components/MoviesPage';
import SelectedMovie from './components/SelectedMovie';
import ErrorPage from './components/ErrorPage';
import { useState } from 'react';
import AddMovie from './components/AddMovie';
// console.log(moviesData[0].Title);


function App() {

const [objData, setObjData] = useState(moviesData)
// console.log(objData);

const [movie, setMovie] = useState({})
// console.log(movie);



  return (
    <div className="App">
{/* <Link to={"/moviespage"} ><button className='btnToMovies'>Select A Movie</button></Link>
<Link to={"/"} ><button>Home Page</button></Link>
<Link to={"/selectedmovie"} ><button>Selected Movie Page</button></Link> */}


<Routes>
<Route path='/' element={<Home />} />

<Route path='/moviespage' element={<MoviesPage objData={objData} selectingMovie={setMovie} />} />

<Route path='/selectedmovie' element={<SelectedMovie movie={movie} />} />

<Route path='/addmovie' element={<AddMovie  ObjData={ setObjData} />} />

<Route path='/*' element={<ErrorPage />} />


</Routes>

     
    </div>
  );
}

export default App;
