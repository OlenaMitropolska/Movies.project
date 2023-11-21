import React from 'react'

function SelectedMovie(props) {



  return (
    <div className='moviePage'> 
  <h1>{props.movie.Title}</h1> 
  <h3>Directed by {props.movie.Director}</h3> 
<img src={props.movie.Poster} alt="" />
  <h2>{props.movie.Year}</h2> 
  <p>Language: {props.movie.Language}</p>
  <p>Released: {props.movie.Released}</p>
  <p>Runtime: {props.movie.Runtime}</p>


    
    </div>
  )

}

export default SelectedMovie