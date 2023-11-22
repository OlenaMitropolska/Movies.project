import React from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function AddMovie(props) {

    const navigate = useNavigate()
    
function submitHandler (e) {
e.preventDefault()
const title = e.target.title.value
const genre = e.target.genre.value
const director = e.target.director.value
const image = e.target.image.value
const year = e.target.year.value
const language = e.target.language.value
const released = e.target.released.value
const runtime = e.target.runtime.value

const object = {}
object.Title = title
object.Genre = genre
object.Director = director
object.Poster = image
object.Year = year
object.Language = language
object.Released = released
object.Runtime = runtime
object.Id = uuidv4(); 

props.ObjData(i => [object, ...i])

navigate("/moviespage")
}


  return (
    <div className='addMovie'>
        <form className='form' onSubmit={submitHandler} >
<input placeholder='title' required type="text" name='title' id='' />
<input placeholder='genre' required type="text" name='genre' id='' />
<input placeholder='director' required type="text" name='director' id='' />
<input placeholder='url' required type="url" name='image' id='' />
<input placeholder='year' required type="number" name='year' id='' />
<input placeholder='language' required type="text" name='language' id='' />
<input placeholder='release date' required type="text" name='released' id='' />
<input placeholder='runtime' required type="text" name='runtime' id='' />

<button type='submit'>Add Movie</button>
        </form>

      
    </div>
  )
}

export default AddMovie