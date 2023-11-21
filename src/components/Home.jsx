import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='mainHome'>
  <Link to={"/moviespage"} ><button className='btnToMovies'>Select A Movie</button></Link>
    </div>
  )
}

export default Home