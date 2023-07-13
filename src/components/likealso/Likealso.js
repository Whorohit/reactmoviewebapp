import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import  './Likealso.css'

export default function Likealso() {

  const [likelist, setLikelist] = useState([])
  const getdata = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=beed108c093e4ebf2f06588647e074a5&language=en-US`)
      .then(res => res.json())
      .then(data => setLikelist(data.results))
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div>
      <Carousel
        className=' ccarousel '
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        
        centerMode={true}
        centerSlidePercentage={33}
      >
      {likelist.map(movie=>(
        <Link to={`/movie/${movie.id}`} className='d-flex text-decoration-none  '>
              <img className='mx-2  likealso_Img' style={{width:'20vw',height:'10vw'}} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='no' />
              <div className="container mx-2 text-light text-decoration-none d-flex align-items-center">
                 {movie.title}
              </div>
        </Link>
      ))}
      </Carousel>
    </div>
  )
}
