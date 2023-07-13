import React,{useState, useRef} from 'react'
import './Navbar.css'
import {Link, useLocation} from 'react-router-dom'
import Home from '../home/Home'

export default function Navbar() {
   
let location =useLocation()
const moviename=useRef(' ')
const [name, setName] = useState('')

const handleonchange = (event) => {
    setName(event.target.value)
  }
const handleonclick=()=>{
    setName(moviename.current.value)

}
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 mt-1 fw-bolder">
            <div className="container-fluid">
                <Link className={`navbar-brand text-light mx-2  ${location.pathname==='/'?'border-bottom border-3':" "}`} style={{ borderColor:'#6f29d7'}} to="/" >Movie</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse otheritem" id="main_nav">
                    <ul className="navbar-nav leftnav">
                        <li className="nav-item active"> <Link className={`nav-link ${location.pathname==='/movies/top_rated'?'border-bottom  border-3':" "} `} to="/movies/top_rated">Top Rated</Link> </li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==='/movies/popular'?'border-bottom  border-3':" "}`} to="/movies/popular">Popular</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==='/movies/upcoming'?'border-bottom  border-3':" "}`} to="/movies/upcoming">Upcoming</Link></li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 bg-transparent text-light" ref={moviename}  type="search"   onChange={handleonchange}    placeholder="Search" aria-label="Search" />
                        <button className={`btn rounded-2  text-light border-light `}  onClick={handleonclick} type="submit"><Link to={`/serach/${moviename.current.value}`} className={`text-decoration-none  `}>Search</Link></button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
