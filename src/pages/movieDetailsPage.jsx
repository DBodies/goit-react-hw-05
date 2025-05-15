import { useParams } from "react-router-dom"

export default function MovieDetailsPage() {
    const {movieId} = useParams()
    console.log(movieId);

    return (
        <div>
            <h2>Movie Detail page: {movieId}</h2>
            <strong>
            Movie page
        </strong>
        </div>
    )
};
