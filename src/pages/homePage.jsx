import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import Loader from "../components/loader";
import NotFoundPage from "./notFoundPage";
import { fetchFilms } from "../fetchFilmsAPI";
import styles from './homePage.module.css'

export default function HomePage() {
    const [dailyMovies, setDailyMovies] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

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

            // axios.get(url, options)
            //     .then((response) => setDailyMovies(response.data.results,  console.log(response)))
            //     .catch(err => console.error(err));
            
        }
        getDailyTradingFilms()
}, [])

    return (
        <>
            <h2 className={styles.homePage}>Home page</h2>
            {loader && <Loader />}
            {error && <NotFoundPage/>}
            <ul className={styles.movieList}>
                {dailyMovies.map((movie) => {
                    return <li key={movie.id}>
                        <NavLink className={styles.listForDailyMovies} to={`/moviesPage/${movie.id}`}>
                            {movie.title}
                        </NavLink></li>
                })}
            </ul>
        </>
    )
};
