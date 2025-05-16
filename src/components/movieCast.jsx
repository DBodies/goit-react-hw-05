import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { API_TOKEN, defaultImgForCast } from "../fetchFilmsAPI"
import axios from "axios"
import styles from './movieCast.module.css'
import 'modern-normalize'

export default function MovieCast() {
    const {movieId} = useParams()
    const [casts, setCasts] = useState([])
    const location = useLocation()
    console.log(location);


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
        <div className={styles.wrapperCast}>
            {casts.length > 0 && 
            casts.map((cast) => (
                <div className={styles.wrapperForActors} key={cast.cast_id}>
                    <img src={`${defaultImgForCast}${cast.profile_path}`} alt=""/>
                    <h2 className={styles.wrapperForActorsName}>{cast.name}</h2>
                    <p className={styles.wrapperForActorsCharacter}>{cast.character}</p>
                </div>
))}
        </div>
    )
};

