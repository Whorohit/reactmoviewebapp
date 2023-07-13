import React, { useEffect, useState } from 'react'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import Movielist from '../movielist/Movielist'


export default function Home() {
    const [homelist, setHomelist] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=beed108c093e4ebf2f06588647e074a5&language=en-US")
            .then(res => res.json())
            .then(data => setHomelist(data.results))
    }, [])

    return (
        <>
        
            <Carousel
                className='mt-1 ccarousel'
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    homelist.map(movie => (
                        <Link className='main '  style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='no' />
                            </div>
                            <div className="description">
                                <h3 className='movie_title '>
                                    {movie.original_title}</h3>
                                <h3 className='description_extra d-flex justify-content-between'>
                                    <span className="release_date">{movie.release_date}</span>
                                    <span className="vote_average">{movie.vote_average} <i class="fa-sharp fa-solid fa-star fa-sm"></i></span>
                                </h3>
                                <h4 className="movie_overview text-center">
                                    {movie.overview}

                                </h4>
                            </div>

                        </Link>
                    ))
                }

            </Carousel>
            <Movielist/>


        </>
    )
}
