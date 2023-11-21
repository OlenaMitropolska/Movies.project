import React from 'react'

function MoviesPage(props) {
  return (
    <div>

{props.objData.map((i,j) => <div key={j}>

    <h2>{props.objData[j].Title}</h2>
<p>{props.objData[j].Year}</p> 
{/* j because we need index of every element and the json does not have a name, we can add it ourselves, same as if we put [0] or [1] */}

</div>




)}

    </div>
  )
}

export default MoviesPage