import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './movie.css'

function Movielist(props) {
    const ref = useRef(null);
    const [list, setList] = useState([])
    const {type}=useParams()
    const getdata=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type?type:'popular'}?api_key=beed108c093e4ebf2f06588647e074a5&language=en-US`)
        .then(res => res.json())
        .then(data => setList(data.results))
    }
    useEffect(() => {
       getdata()
    }, [type])
    
    return (
        <div className="row rowline container mx-auto my-3 ">
            {
                list.map(movie => (
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

    )
}

export default Movielist