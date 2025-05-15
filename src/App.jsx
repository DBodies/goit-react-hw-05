import Navigation from './components/navigation'
import 'modern-normalize'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/homePage'
import MoviesPage from './pages/moviesPage'
import NotFoundPage from './pages/notFoundPage'
import MovieDetailsPage from './pages/movieDetailsPage'


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <HomePage/> }></Route>
        <Route path='/moviesPage' element={<MoviesPage />}></Route>
        <Route path='/moviesPage/:movieId' element={<MovieDetailsPage/>}></Route>
      <Route path='*' element={ <NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
