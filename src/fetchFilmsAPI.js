import axios from "axios";

export const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDU3MWJmYTVlNGViNjc1MGE1N2YyNjRkNDVmMmIyNSIsIm5iZiI6MTc0NzIzMTQ4Mi43MSwic3ViIjoiNjgyNGEyZmE2MDk3MjgzMzZhYTE2ZjBiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UvxFS8ybST1Es4DSspU7_5JwUEUZ64OF0mlrhfKpmRU'
const baseUrlForDailyMovie = 'https://api.themoviedb.org/3'
export const defaultImg = 'https://image.tmdb.org/t/p/w500'
export const defaultImgForCast = 'https://image.tmdb.org/t/p/w200'
const API_KEY = '64571bfa5e4eb6750a57f264d45f2b25'
const BASE_URL_ForSearchbar = 'https://api.themoviedb.org/3/search/movie'

const axiosInst = axios.create({
    baseURL: baseUrlForDailyMovie,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
})

export const fetchFilmBySearch = async (query) => {
    try {
        const res = await axios.get(BASE_URL_ForSearchbar, {
            params: {
                api_key: API_KEY,
                query: query
            }
        })
        return res.data.results
    } catch (error) {
        console.error('Error, try again...', error)
    }
}
export const fetchFilms = async () => {
    const res = await axiosInst.get(`/trending/movie/day`)
    return res.data.results
}
