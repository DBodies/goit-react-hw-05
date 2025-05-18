import { useSearchParams} from "react-router-dom";
import SearchBar from "../components/searchbar"
import { fetchFilmBySearch } from "../fetchFilmsAPI";
import { useEffect, useState } from "react";
import MovieList from "./movieList";

export default function MoviesPage() {
    const [films, setFilms] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || ""

    const handleSearch = (newQuery) => {
    setSearchParams({query: newQuery})
}
    
    useEffect(() => {
        if (!query) return
        const getFilms = async () => {
            try {
                const data = await fetchFilmBySearch(query)
                setFilms(data)
            } catch (error) {
                console.error('Error', error);
            }
        }
        getFilms()
    })
    
    return (
        <>
        <h2>
                Movie page </h2>
            
            <SearchBar onSubmit={handleSearch} />
            {films.length > 0 && <MovieList dailyMovies={films} />}
        </>
    )
};
