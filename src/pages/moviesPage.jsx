import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../components/searchbar"
import { fetchFilmBySearch } from "../fetchFilmsAPI";
import { useState } from "react";

export default function MoviesPage() {
    const [films, setFilms] = useState([])
    const location = useLocation()

    const handleSearch =  async (query) => {
        try {
            const data = await fetchFilmBySearch(query)
            setFilms(data)
        } catch (error) {
            return console.error('Error', error)
        }
      }
    
    return (
        <>
        <h2>
                Movie page </h2>
            
            <SearchBar onSubmit={handleSearch} />
            <ul>
                {films.map(film => (
                    <li key={film.id}><NavLink to={`/moviesPage/${film.id}`} state={location}>{film.title}</NavLink></li>
                ))}
</ul>
        </>
    )
};
