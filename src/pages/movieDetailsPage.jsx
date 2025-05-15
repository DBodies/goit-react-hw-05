import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { API_TOKEN, defaultImg } from "../fetchFilmsAPI";

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
            <h2>Movie Detail page: {movieId}</h2>
            {movie && (
                <div>
                    <img src={`${defaultImg}${movie.backdrop_path}`} alt="" />
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
)}
        </div>
    )
};
