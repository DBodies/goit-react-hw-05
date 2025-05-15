import SearchBar from "../components/searchbar"

export default function MoviesPage() {
    const handleSearch = (query) => {
        console.log("Поиск фильма:", query);

      };
    return (
        <>
        <h2>
            Movie page    </h2>
            <SearchBar onSubmit={handleSearch} />
        </>
    )
};
