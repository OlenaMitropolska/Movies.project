import React from 'react'
import { useNavigate } from 'react-router-dom'


function MoviesPage(props) {
    const navigate = useNavigate()

function clickHandler () {
//   console.log("Hi");

navigate("/selectedmovie")
}

  return (
    <div>

{props.objData.map((i,j) => <div className='displayCard' key={j}>

    <h2>{props.objData[j].Title}</h2>
<p>{props.objData[j].Year}</p>  {/* j because we need index of every element and the json does not have a name, we can add it ourselves, same as if we put [0] or [1] */}
<button onClick={clickHandler}>View Info</button>
</div>




)}

    </div>
  )
}

export default MoviesPage