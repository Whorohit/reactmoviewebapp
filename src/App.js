
import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Movielist from './components/movielist/Movielist'
import Movieinfo from './components/movieinfo/Movieinfo'
import Movieserach from './components/movieserach/Movieserach'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>} ></Route>
          <Route  path='/movies/:type' exact={true}  key={"type"} element={<Movielist  key={`type`} />}></Route>
          <Route  path='/movie/:id' exact={true}  key={"type"} element={<Movieinfo  key={`type`} />}></Route>
          <Route  path='/serach/:moviename' exact={true}  key={"type"} element={<Movieserach  key={`type`} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
