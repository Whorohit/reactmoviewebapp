import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'

import  './Movieserach.css'
export default function Movieserach() {
    const [movie, setMovie] = useState([])
    
    const { moviename } = useParams()
    
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
          setMovie(data.results)
        console.log(data.results[0])
          // setTitle(data.results[0].title.split(' '))
        //   setYear(new Date(data.release_date))
          // setGenres(data.results[0].genres)
        })
    }, [moviename])
    
  return (
    <>
    <div className="row rowline container mx-auto my-3 ">
            {
                movie.map(movie => (
                    <Link to={`/movie/${movie.id}`} className="col-6 col-sm-3 text-decoration-none  "  style={{margin:'2rem 0rem'}}>
                        <div>
                            <div className="card imageblock border-dark">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="card-img-top" alt="..." />
                                
                            </div>
                            <h2 id="box" className='fs-4  fw-bolder text-light text-center text-decoration-none titlemovie'>{movie.title.toUpperCase()}</h2>
                            <div className="container d-flex justify-content-between text-light">
                                <h5 className="fs-4 fw-bolder">{movie.release_date}</h5>
                                <h5 className="fs-4 fw-bolder">{movie.vote_average}  <i className="fa-sharp fa-solid fa-star fa-sm"></i></h5>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
  </>
  )
}
