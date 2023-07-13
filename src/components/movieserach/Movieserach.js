import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import  Likealso from '../likealso/Likealso'
import  './Movieserach.css'
export default function Movieserach() {
    const [movie, setMovie] = useState({})
    const [year, setYear] = useState(' ')
    const [genres, setGenres] = useState([])
    
    const { moviename } = useParams()
    const [title, setTitle] = useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWVkMTA4YzA5M2U0ZWJmMmYwNjU4ODY0N2UwNzRhNSIsInN1YiI6IjY0OWYyM2YzM2FmOTI5MDE0NGYwYmYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2bSwc_9qkG0gVYYItO5zdtXf3tOaLwaMdmM7EUBJoZQ'
        }
      };
      
  
    useEffect(() => {

      fetch(`https://api.themoviedb.org/3/search/movie?query=${moviename}&include_adult=false&language=en-US&page=1&results=1`, options)
        .then(res => res.json())
        .then(data => {
          setMovie(data.results[0])
        console.log(data.results[0])
          setTitle(data.results[0].title.split(' '))
        //   setYear(new Date(data.release_date))
          // setGenres(data.results[0].genres)
        })
    }, [moviename])
    
  return (
    <>
    <div className=' mainbox my-2'>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
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
           {/* <h5 className='wrapcontainer'>{genres.map(id=>(
             <span className='text-light'>{id.name}</span>
           ))}</h5> */}
    </div>
    <div className="overview">
       <p className=''>{movie.overview}</p>
    </div>
    <Likealso/>
  </>
  )
}
