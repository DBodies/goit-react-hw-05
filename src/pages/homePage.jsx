import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom";
import Loader from "../components/loader";
import NotFoundPage from "./notFoundPage";
import { fetchFilms } from "../fetchFilmsAPI";
import styles from './homePage.module.css'
import MovieCast from "../components/movieCast";
import MovieList from "./movieList";

export default function HomePage() {
    const [dailyMovies, setDailyMovies] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const location = useLocation()
    console.log(location);

    useEffect(() => {
        async function getDailyTradingFilms() {
            try {
                setLoader(true)
                setError(false)
                const response = await fetchFilms()
                setDailyMovies(response)
                console.log(response)
            } catch (error) {
                setError(true)
                console.log('Something went wrong 404', error)
            } finally {
                setLoader(false)
            }
            
        }
        getDailyTradingFilms()
}, [])
    return (
        <>
            <h2 className={styles.homePage}>Home page</h2>
            {loader && <Loader />}
            {error && <NotFoundPage />}
            <MovieList dailyMovies={dailyMovies} />
        </>
    )
};
