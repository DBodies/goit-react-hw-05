import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_TOKEN, defaultImgForCast } from "../fetchFilmsAPI"
import axios from "axios"

export default function MovieCast() {
    const {movieId} = useParams()
    const [casts, setCasts] = useState([])

    useEffect(() => {
        if(!movieId) return
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
            headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
        }).then((res) => {
            console.log(res.data.cast)
                setCasts(res.data.cast);
    }).catch((err) => console.error('Error cast', err))
},[movieId])


    return (
        <div>
            {casts.length > 0 && 
            casts.map((cast) => (
                <div key={cast.cast_id}>
                    <img src={`${defaultImgForCast}${cast.profile_path}`} alt=""/>
                    <h2>{cast.name}</h2>
                    <p>{cast.character}</p>
                </div>
))}
        </div>
    )
};

