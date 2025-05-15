import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom"
import axios from "axios";
import { API_TOKEN, defaultImg } from "../fetchFilmsAPI";
import { NavLink } from "react-router-dom";

export default function MovieDetailsPage() {
    const {movieId} = useParams()
    console.log(movieId);
    const [movie, setMovie] = useState(null)

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
            
            {movie && (
                <div>
                    <img src={`${defaultImg}${movie.backdrop_path}`} alt="" />
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
            )}
            <div>
            <NavLink to='cast'>Cast</NavLink>
                <NavLink to='reviews'>Reviews</NavLink>
            </div>
            <Outlet/>
        </div>
    )
};
