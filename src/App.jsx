import { useState } from 'react'
import Navigation from './components/Navigation'
import 'modern-normalize'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/homePage'
import MoviesPage from './pages/moviesPage'
import NotFoundPage from './pages/notFoundPage'


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <HomePage/> }></Route>
        <Route path='/moviesPage' element={ <MoviesPage/> }></Route>
      <Route path='*' element={ <NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
