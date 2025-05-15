import Navigation from './components/navigation'
import 'modern-normalize'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/homePage'
import MoviesPage from './pages/moviesPage'
import NotFoundPage from './pages/notFoundPage'
import MovieDetailsPage from './pages/movieDetailsPage'
import MovieCast from './components/movieCast'
import MovieReviews from './components/movieReviews'


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/moviesPage' element={<MoviesPage />}/>
        <Route path='/moviesPage/:movieId' element={<MovieDetailsPage />}>
        <Route path='cast' element={<MovieCast/>}/>
        <Route path='reviews' element={<MovieReviews/>}/>
        </Route>
      <Route path='*' element={ <NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
