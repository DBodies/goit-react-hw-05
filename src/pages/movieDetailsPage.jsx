import { useEffect, useRef, useState } from "react";
import { useParams, Outlet, useLocation} from "react-router-dom"
import axios from "axios";
import { API_TOKEN, defaultImg } from "../fetchFilmsAPI";
import { NavLink } from "react-router-dom";
import styles from './movieDetail.module.css'
import clsx from "clsx";


export default function MovieDetailsPage() {
    const {movieId} = useParams()
    console.log(movieId);
    const [movie, setMovie] = useState(null)
    const location = useLocation()
    const backLinkRef = useRef(location.state)
    console.log(backLinkRef);

const changedStyles = ({ isActive }) => {
    return clsx(styles.cast, isActive && styles.castStyles )
}

    useEffect(() => {
        if (!movieId) return
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
        }).then((res) => {
            console.log(res.data)
                setMovie(res.data);
        })
        .catch((err) => console.error('Error download',err))
    }, [movieId])
    
    return (
        <div>
            <NavLink  to='/'><button className={styles.btnStyles}>Go back</button></NavLink>

            {movie && (
                <div className={styles.wrapperForDetailPage}>
                    <img src={`${defaultImg}${movie.backdrop_path}`} alt="" />
                    <div>
                        <h3>{movie.title}</h3>
                        <p className={styles.textOverview}>{movie.overview}</p>
                    </div>
                    
                </div>
            )}
            <div>
            <NavLink className={changedStyles} to='cast' state={location}>Cast</NavLink>
                <NavLink className={changedStyles} to='reviews' state={location}>Reviews</NavLink>
            </div>
            <Outlet/>
        </div>
    )
};
