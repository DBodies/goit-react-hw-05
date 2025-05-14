import { useEffect, useState } from "react"
import axios from "axios";

export default function HomePage() {
const [dailyMovies, setDailyMovies] = useState([])

    useEffect(() => {
        async function getDailyTradingFilms() {
            const url = 'https://api.themoviedb.org/3/trending/movie/day';

            const options = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDU3MWJmYTVlNGViNjc1MGE1N2YyNjRkNDVmMmIyNSIsIm5iZiI6MTc0NzIzMTQ4Mi43MSwic3ViIjoiNjgyNGEyZmE2MDk3MjgzMzZhYTE2ZjBiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UvxFS8ybST1Es4DSspU7_5JwUEUZ64OF0mlrhfKpmRU'
                }
            };
            
            axios.get(url, options)
                .then((response) => setDailyMovies(response.data.dailyMovies,  console.log(response)))
                .catch(err => console.error(err));
            
        }
        getDailyTradingFilms()
}, [])

    return (
        <>
            <h2>Home page</h2>
            <ul>{dailyMovies.map(movie => {
                <li></li>
            })}</ul>
        </>
    )
};
