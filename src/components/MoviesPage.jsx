import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function MoviesPage(props) {
    const navigate = useNavigate()

function clickHandler (movie) {

props.selectingMovie(i => movie)

navigate("/selectedmovie")
}

  return (
    <div className='mainMoviesPage'>

{props.objData.map((i,j) => <div className='displayCard' key={j}>

    <h2>{props.objData[j].Title}</h2>
    <p>{props.objData[j].Genre}</p>  {/* j because we need index of every element and the json does not have a name, we can add it ourselves, same as if we put [0] or [1] */}
<button onClick={()=> clickHandler(i)}>View Info</button>
</div>

)}

<div className="buttonto">
<Link to={"/addmovie"}><button>Add Movie</button></Link>
</div>


    </div>
  )
}

export default MoviesPage