import React, { useEffect, useState } from 'react'
import './Movieinfo.css'
import { Link, useParams, useSubmit } from 'react-router-dom'
import Likealso from '../likealso/Likealso'

function Movieinfo() {
  const [movie, setMovie] = useState({})
  const [year, setYear] = useState(' ')
  const [genres, setGenres] = useState([])
  
  const { id } = useParams()
  const [title, setTitle] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => {
        setMovie(data)
        setTitle(data.title.split(' '))
        setYear(new Date(data.release_date))
        setGenres(data.genres)
      })
  }, [id])
   console.log(typeof(movie.vote_average))

  return (<>
    <div className=' mainbox my-2'>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="not  Avaiable" />
    </div>
    <div className="movie_detail mx-4">
      <h1 className=' movie_detailmain text-light  fw-bolder text-uppercase my-0'>{title[0] + '  ' + ' ' + title[1]}</h1>
      <h2 className='  movie_detailmain2 text-light fw-semibold text-uppercase '> {title.slice(2, title.length).join(' ')}</h2>

    </div>
    <div className='buttonbox text-dark'>

      <button type="button" className="btn btn-light  mx-2 rounded-pill py-1"><a className='text-dark text-decoration-none  ' target="_blank" href={`${movie.homepage}`}>More information</a></button>
      <button type="button" className="btn btn-light mx-2 rounded-pill py-1"><a className='text-dark text-decoration-none  ' target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`}>Go to Imdb</a></button>
    </div>
    <div className="moreinfo d-flex justify-content-start text-light flex-wrap w-75 ">
          <h5 className='mx-5'>{movie.release_date}</h5>
          <h5 className='mx-3 border-end pe-2 border-2'>{Number(movie.vote_average).toFixed(1)} <i class="fa-sharp fa-solid fa-star fa-sm"></i></h5>
          <h5 className='wrapcontainer'>{genres.map(id=>(
            <span className='text-light'>{id.name}</span>
          ))}</h5>
    </div>
    <div className="overview">
       <p className=''>{movie.overview}</p>
    </div>
    <Likealso/>
  </>
  )
}

export default Movieinfo