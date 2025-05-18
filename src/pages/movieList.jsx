import styles from './homePage.module.css'
import { NavLink, useLocation } from 'react-router-dom'
export default function MovieList({ dailyMovies }) {
    const location = useLocation()
    
    

    return (
        <div>
                        <ul className={styles.movieList}>
                {dailyMovies.map((movie) => {
                    return <li key={movie.id}>
                        <NavLink  className={styles.listForDailyMovies}
                            to={`/moviesPage/${movie.id}`}
                            state={location}
                        >
                            {movie.title}
                        </NavLink></li>
                })}
            </ul>
        </div>
    )
};
