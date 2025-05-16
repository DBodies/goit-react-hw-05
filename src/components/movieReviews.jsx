import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"
import { API_TOKEN } from "../fetchFilmsAPI"

export default function MovieReviews() {
    const { movieId } = useParams()
    const [reviews, setReviews] = useState([])
    const location = useLocation()
    console.log(location);
    
    useEffect(() => {
        if (!movieId) return 
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
            headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
        }).then((res) => {
            console.log(res.data.results);
            setReviews(res.data.results)
        }).catch((err) => console.error('Page error', err))
}, [movieId])

    return (
        <div>

            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review.id}>
                        <h2>Author: {review.author}</h2>
                        <p>{review.content}</p>
                </div>
                ))
) : (<p>No reviews now</p>)}

            {/* {reviews.length > 0 && 
                reviews.map((review) => (
                    <div key={review.id}>
                        <h2>Author: {review.author}</h2>
                        <p>{review.content}</p>
                </div>
            ))} */}
        </div>
    )
};
