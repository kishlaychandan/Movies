import { useState } from 'react'
import './App.css'
import Movie from './components/Movie/Movie'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home'
import movies from "./data.js";
import shows from './components/shows.js'
function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movie moviesData={movies} title="Movies"/>}/>
      <Route path='/tvshows' element={<Movie moviesData={shows} title="Tv Shows"/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
