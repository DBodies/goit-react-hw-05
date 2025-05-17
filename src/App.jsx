import { lazy, Suspense } from 'react'
import Navigation from './components/navigation'
import 'modern-normalize'
import {Routes, Route} from 'react-router-dom'
import styles from './stylesForApp.module.css'
const HomePage = lazy(() => import('./pages/homePage'))
const MoviesPage = lazy(() => import('./pages/moviesPage'))
const NotFoundPage = lazy(() => import('./pages/notFoundPage'))
const MovieDetailsPage = lazy(() => import('./pages/movieDetailsPage'))
const MovieCast = lazy(() => import('./components/movieCast'))
const MovieReviews = lazy(() => import('./components/movieReviews'))

function App() {

  return (
    <div className={styles.container}>
      <Navigation />
      <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/moviesPage' element={<MoviesPage />}/>
        <Route path='/moviesPage/:movieId' element={<MovieDetailsPage />}>
        <Route path='cast' element={<MovieCast/>}/>
        <Route path='reviews' element={<MovieReviews/>}/>
        </Route>
      <Route path='*' element={ <NotFoundPage/>}></Route>
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
