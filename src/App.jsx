
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import moviesData from "./data/data.json"
import Home from './components/Home';
import MoviesPage from './components/MoviesPage';
import SelectedMovie from './components/SelectedMovie';
import ErrorPage from './components/ErrorPage';
import { useState } from 'react';
// console.log(moviesData[0].Title);


function App() {

const [objData, setObjData] = useState(moviesData)
// console.log(objData);

const [movie, setMovie] = useState({})
// console.log(movie);



  return (
    <div className="App">
<Link to={"/moviespage"} ><button>Movies Page</button></Link>
<Link to={"/"} ><button>Home Page</button></Link>
<Link to={"/selectedmovie"} ><button>Selected Movie Page</button></Link>


<Routes>
<Route path='/' element={<Home />} />

<Route path='/moviespage' element={<MoviesPage objData={objData} />} />

<Route path='/selectedmovie' element={<SelectedMovie />} />

<Route path='/*' element={<ErrorPage />} />


</Routes>

     
    </div>
  );
}

export default App;
